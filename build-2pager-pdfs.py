#!/usr/bin/env python3
"""Render MBL 2-pager PDFs for the live site.
Run by .github/workflows/deploy.yml on push. Generates fonts-2pager.css from
@fontsource woff2 subsets, then renders each *-2pager.html to downloads/*.pdf.
Self-contained PDFs (fonts embedded). See topic-2pager-framework.md (WEB-STANDARDS).
"""
import base64, os, subprocess, sys
from playwright.sync_api import sync_playwright
from pypdf import PdfReader

ROOT = os.path.dirname(os.path.abspath(__file__))
DOWNLOADS = os.path.join(ROOT, "downloads")
FONT_CSS = os.path.join(ROOT, "fonts-2pager.css")

DOCS = ["customer-journey-2pager", "foundation-build-2pager", "workshop-2pager", "ai-workshop-2pager"]

FONTS = [
    ("Plus Jakarta Sans", "400", "normal", "plus-jakarta-sans-latin-400-normal.woff2"),
    ("Plus Jakarta Sans", "500", "normal", "plus-jakarta-sans-latin-500-normal.woff2"),
    ("Plus Jakarta Sans", "700", "normal", "plus-jakarta-sans-latin-700-normal.woff2"),
    ("Plus Jakarta Sans", "800", "normal", "plus-jakarta-sans-latin-800-normal.woff2"),
    ("Plus Jakarta Sans", "800", "italic", "plus-jakarta-sans-latin-800-italic.woff2"),
    ("DM Sans", "300", "normal", "dm-sans-latin-300-normal.woff2"),
    ("DM Sans", "400", "normal", "dm-sans-latin-400-normal.woff2"),
    ("DM Sans", "400", "italic", "dm-sans-latin-400-italic.woff2"),
    ("DM Sans", "500", "normal", "dm-sans-latin-500-normal.woff2"),
]

def generate_font_css():
    work = "/tmp/mbl-fonts"
    os.makedirs(work, exist_ok=True)
    subprocess.run("npm pack @fontsource/plus-jakarta-sans @fontsource/dm-sans",
                   shell=True, cwd=work, check=True, capture_output=True)
    members = " ".join(f'"package/files/{f[3]}"' for f in FONTS if "plus-jakarta" in f[3])
    subprocess.run(f"tar -xzf fontsource-plus-jakarta-sans-*.tgz {members}",
                   shell=True, cwd=work, check=True)
    members = " ".join(f'"package/files/{f[3]}"' for f in FONTS if "dm-sans" in f[3])
    subprocess.run(f"tar -xzf fontsource-dm-sans-*.tgz {members}",
                   shell=True, cwd=work, check=True)
    out = []
    for family, weight, style, fname in FONTS:
        with open(os.path.join(work, "package/files", fname), "rb") as f:
            b64 = base64.b64encode(f.read()).decode()
        out.append(f"""  @font-face {{
    font-family: '{family}';
    font-style: {style};
    font-weight: {weight};
    src: url('data:font/woff2;base64,{b64}') format('woff2');
  }}""")
    open(FONT_CSS, "w").write("\n".join(out))
    print(f"generated {FONT_CSS} ({os.path.getsize(FONT_CSS)} bytes)")

def render_all():
    os.makedirs(DOWNLOADS, exist_ok=True)
    failures = []
    with sync_playwright() as p:
        browser = p.chromium.launch()
        for slug in DOCS:
            src = os.path.join(ROOT, f"{slug}.html")
            pdf = os.path.join(DOWNLOADS, f"{slug}.pdf")
            page = browser.new_page()
            page.goto(f"file://{src}")
            page.wait_for_load_state("networkidle")
            page.pdf(path=pdf, format="Letter",
                     margin={"top":"0","bottom":"0","left":"0","right":"0"},
                     print_background=True, prefer_css_page_size=True)
            page.close()
            r = PdfReader(pdf)
            ok = len(r.pages) == 2 and all(
                abs(float(pg.mediabox.width)-612) < 2 and abs(float(pg.mediabox.height)-792) < 2
                for pg in r.pages)
            print(f"  {slug}: {len(r.pages)}pg  {'PASS' if ok else 'FAIL'}")
            if not ok:
                failures.append(slug)
        browser.close()
    if failures:
        print(f"VALIDATION GATE FAILED: {failures}")
        sys.exit(1)
    print("validation gate: all PASS")

if __name__ == "__main__":
    generate_font_css()
    render_all()
