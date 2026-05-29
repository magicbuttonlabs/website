/* ============================================================
   Magic Button Labs — Shared Testimonials Renderer
   Single source of truth: testimonials.json
   Drives any of these containers if present on the page:
     [data-testimonials="featured-proof"]  → one featured quote (homepage proof-strip)
     [data-testimonials="featured-quote"]  → one featured quote (About trust-quote block)
     [data-testimonials="list"]            → list with "see all" toggle (CJ page)
     [data-testimonials="wall"]            → full grid of cards (testimonials.html)
   Notes:
   - fetch() requires the page be served over http(s); it will not run from file://.
     On GitHub Pages this is fine.
   - If the fetch fails, any existing hardcoded markup inside the container is left in place
     as a fallback (we only replace innerHTML on success).
   ============================================================ */
(function () {
  "use strict";

  // How many quotes are visible before the "see all" toggle on the CJ list.
  var LIST_VISIBLE = 4;

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Resolve the JSON path relative to this script so it works at any URL depth.
  function dataUrl() {
    var me = document.currentScript;
    if (me && me.src) {
      return me.src.replace(/testimonials\.js(\?.*)?$/, "testimonials.json");
    }
    return "testimonials.json";
  }

  function pickFeatured(list) {
    var featured = list.filter(function (t) { return t && t.featured; });
    return (featured.length ? featured : list)[0] || null;
  }

  function attribution(t) {
    return '<span class="name">' + esc(t.name) + "</span>" +
           '<span class="sep">&mdash;</span>' + esc(t.company);
  }

  // --- Renderers -------------------------------------------------

  function renderFeaturedProof(el, list) {
    var t = pickFeatured(list);
    if (!t) return;
    el.innerHTML =
      "<p>" + esc(t.quote) + "</p>" +
      '<span class="proof-attr"><strong>' + esc(t.name) + "</strong> &mdash; " + esc(t.company) + "</span>";
  }

  function renderFeaturedQuote(el, list) {
    var t = pickFeatured(list);
    if (!t) return;
    el.innerHTML =
      "<blockquote>" + esc(t.quote) + "</blockquote>" +
      '<div class="attr"><strong>' + esc(t.name) + "</strong> &mdash; " + esc(t.company) + "</div>";
  }

  function quoteFigure(t, hidden) {
    return '<figure class="quote' + (hidden ? " is-hidden" : "") + '">' +
             "<blockquote>" + esc(t.quote) + "</blockquote>" +
             '<figcaption class="attribution">' + attribution(t) + "</figcaption>" +
           "</figure>";
  }

  function renderList(el, list) {
    if (!list.length) return;
    var html = list.map(function (t, i) {
      return quoteFigure(t, i >= LIST_VISIBLE);
    }).join("");
    el.innerHTML = html;

    // Re-bind the existing "see all" toggle to the freshly rendered quotes.
    var moreWrap = document.getElementById("testimonials-more");
    var moreBtn = document.getElementById("testimonials-more-btn");
    if (!moreWrap || !moreBtn) return;

    var hiddenCount = list.length - LIST_VISIBLE;
    var labelEl = moreBtn.querySelector(".label");

    if (hiddenCount <= 0) {
      moreWrap.classList.add("is-empty");
      return;
    }
    moreWrap.classList.remove("is-empty");

    function setCollapsed() { if (labelEl) labelEl.textContent = "see all " + list.length + " testimonials"; }
    function setExpanded() { if (labelEl) labelEl.textContent = "show fewer"; }
    setCollapsed();

    // Clone the button to drop any previously attached handlers, then bind once.
    var fresh = moreBtn.cloneNode(true);
    moreBtn.parentNode.replaceChild(fresh, moreBtn);
    fresh.addEventListener("click", function () {
      var expanded = el.classList.toggle("is-expanded");
      if (expanded) setExpanded(); else setCollapsed();
    });
  }

  function renderWall(el, list) {
    if (!list.length) {
      el.innerHTML = '<p class="tw-empty">Testimonials coming soon.</p>';
      return;
    }
    el.innerHTML = list.map(function (t) {
      return '<figure class="tw-card">' +
               "<blockquote>" + esc(t.quote) + "</blockquote>" +
               '<figcaption class="tw-attr"><span class="tw-name">' + esc(t.name) +
               "</span><span class=\"tw-company\">" + esc(t.company) + "</span></figcaption>" +
             "</figure>";
    }).join("");
  }

  // --- Boot ------------------------------------------------------

  function render(list) {
    if (!Array.isArray(list)) return;
    document.querySelectorAll('[data-testimonials]').forEach(function (el) {
      switch (el.getAttribute("data-testimonials")) {
        case "featured-proof": renderFeaturedProof(el, list); break;
        case "featured-quote": renderFeaturedQuote(el, list); break;
        case "list":           renderList(el, list); break;
        case "wall":           renderWall(el, list); break;
      }
    });
  }

  function init() {
    // Skip the fetch entirely if no container is on this page.
    if (!document.querySelector('[data-testimonials]')) return;
    fetch(dataUrl(), { cache: "no-cache" })
      .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
      .then(render)
      .catch(function (err) {
        // Leave any hardcoded fallback markup in place.
        if (window.console) console.warn("testimonials: could not load data —", err.message);
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
