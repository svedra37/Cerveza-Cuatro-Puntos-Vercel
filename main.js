(function () {
  "use strict";

  var BRAND = window.__BRAND__ || {};
  var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasHover = matchMedia("(hover: hover)").matches;

  function safe(fn, name) {
    try { fn(); } catch (e) { console.warn("[" + name + "]", e); }
  }

  /* ---------------- WhatsApp links ---------------- */
  function initWhatsapp() {
    var num = BRAND.meta && BRAND.meta.whatsapp;
    var msg = (BRAND.meta && BRAND.meta.whatsappMessage) || "";
    if (!num) return;
    var url = "https://wa.me/" + num + "?text=" + encodeURIComponent(msg);
    document.querySelectorAll("[data-whatsapp-link]").forEach(function (a) {
      a.setAttribute("href", url);
    });
  }

  /* ---------------- i18n ---------------- */
  var LANG_KEY = "cp_lang";
  function getLangDict() {
    return {
      "nav.historia": BRAND.nav && BRAND.nav[0],
      "nav.variedades": BRAND.nav && BRAND.nav[1],
      "nav.proceso": BRAND.nav && BRAND.nav[2],
      "nav.yucatan": BRAND.nav && BRAND.nav[3],
      "nav.contacto": BRAND.nav && BRAND.nav[4]
    };
  }
  function applyLang(lang) {
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang);

    var map = {
      "hero.kicker": BRAND.hero && BRAND.hero.kicker,
      "hero.title1": BRAND.hero && BRAND.hero.titleLines && BRAND.hero.titleLines[0],
      "hero.title2": BRAND.hero && BRAND.hero.titleLines && BRAND.hero.titleLines[1],
      "hero.sub": BRAND.hero && BRAND.hero.sub,
      "hero.ctaPrimary": BRAND.hero && BRAND.hero.ctaPrimary,
      "hero.ctaSecondary": BRAND.hero && BRAND.hero.ctaSecondary,
      "nav.historia": BRAND.nav && BRAND.nav[0],
      "nav.variedades": BRAND.nav && BRAND.nav[1],
      "nav.proceso": BRAND.nav && BRAND.nav[2],
      "nav.yucatan": BRAND.nav && BRAND.nav[3],
      "nav.contacto": BRAND.nav && BRAND.nav[4],
      "historia.kicker": BRAND.historia && BRAND.historia.kicker,
      "historia.title": BRAND.historia && BRAND.historia.title,
      "historia.p1": BRAND.historia && BRAND.historia.paragraphs && BRAND.historia.paragraphs[0],
      "historia.p2": BRAND.historia && BRAND.historia.paragraphs && BRAND.historia.paragraphs[1],
      "historia.p3": BRAND.historia && BRAND.historia.paragraphs && BRAND.historia.paragraphs[2],
      "historia.stat1": BRAND.historia && BRAND.historia.stats && BRAND.historia.stats[0].label,
      "historia.stat2": BRAND.historia && BRAND.historia.stats && BRAND.historia.stats[1].label,
      "historia.stat3": BRAND.historia && BRAND.historia.stats && BRAND.historia.stats[2].label,
      "historia.stat4": BRAND.historia && BRAND.historia.stats && BRAND.historia.stats[3].label,
      "pour.kicker": BRAND.pour && BRAND.pour.kicker,
      "pour.title": BRAND.pour && BRAND.pour.title,
      "pour.sub": BRAND.pour && BRAND.pour.sub,
      "momentos.kicker": BRAND.momentos && BRAND.momentos.kicker,
      "momentos.title": BRAND.momentos && BRAND.momentos.title,
      "momentos.item1.caption": BRAND.momentos && BRAND.momentos.items && BRAND.momentos.items[0].caption,
      "momentos.item2.caption": BRAND.momentos && BRAND.momentos.items && BRAND.momentos.items[1].caption,
      "variedades.kicker": BRAND.variedades && BRAND.variedades.kicker,
      "variedades.title": BRAND.variedades && BRAND.variedades.title,
      "variedades.item1.desc": BRAND.variedades && BRAND.variedades.items && BRAND.variedades.items[0].desc,
      "variedades.item2.desc": BRAND.variedades && BRAND.variedades.items && BRAND.variedades.items[1].desc,
      "variedades.item3.desc": BRAND.variedades && BRAND.variedades.items && BRAND.variedades.items[2].desc,
      "proceso.kicker": BRAND.proceso && BRAND.proceso.kicker,
      "proceso.title": BRAND.proceso && BRAND.proceso.title,
      "proceso.step1.name": BRAND.proceso && BRAND.proceso.steps && BRAND.proceso.steps[0].name,
      "proceso.step1.desc": BRAND.proceso && BRAND.proceso.steps && BRAND.proceso.steps[0].desc,
      "proceso.step2.name": BRAND.proceso && BRAND.proceso.steps && BRAND.proceso.steps[1].name,
      "proceso.step2.desc": BRAND.proceso && BRAND.proceso.steps && BRAND.proceso.steps[1].desc,
      "proceso.step3.name": BRAND.proceso && BRAND.proceso.steps && BRAND.proceso.steps[2].name,
      "proceso.step3.desc": BRAND.proceso && BRAND.proceso.steps && BRAND.proceso.steps[2].desc,
      "proceso.step4.name": BRAND.proceso && BRAND.proceso.steps && BRAND.proceso.steps[3].name,
      "proceso.step4.desc": BRAND.proceso && BRAND.proceso.steps && BRAND.proceso.steps[3].desc,
      "proceso.step5.name": BRAND.proceso && BRAND.proceso.steps && BRAND.proceso.steps[4].name,
      "proceso.step5.desc": BRAND.proceso && BRAND.proceso.steps && BRAND.proceso.steps[4].desc,
      "yucatan.kicker": BRAND.yucatan && BRAND.yucatan.kicker,
      "yucatan.title": BRAND.yucatan && BRAND.yucatan.title,
      "yucatan.p": BRAND.yucatan && BRAND.yucatan.paragraph,
      "contacto.kicker": BRAND.contacto && BRAND.contacto.kicker,
      "contacto.title": BRAND.contacto && BRAND.contacto.title,
      "contacto.sub": BRAND.contacto && BRAND.contacto.sub,
      "contacto.ctaWhatsapp": BRAND.contacto && BRAND.contacto.ctaWhatsapp,
      "contacto.social": BRAND.contacto && BRAND.contacto.social,
      "footer.made": BRAND.footer && BRAND.footer.made,
      "footer.rights": BRAND.footer && BRAND.footer.rights
    };

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var entry = map[key];
      if (!entry) return;
      var text = entry[lang] || entry.es;
      if (!text) return;
      if (el.querySelector("em")) {
        el.innerHTML = "<em>" + text + "</em>";
      } else {
        el.innerHTML = text.replace(/\n/g, "<br>");
      }
    });

    var toggle = document.querySelector("[data-lang-toggle]");
    if (toggle) toggle.textContent = lang === "es" ? "ES / EN" : "EN / ES";
  }
  function initI18n() {
    var stored = "es";
    try { stored = localStorage.getItem(LANG_KEY) || "es"; } catch (e) {}
    applyLang(stored);
    var toggle = document.querySelector("[data-lang-toggle]");
    if (!toggle) return;
    toggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-lang") || "es";
      var next = current === "es" ? "en" : "es";
      applyLang(next);
      try { localStorage.setItem(LANG_KEY, next); } catch (e) {}
    });
  }

  /* ---------------- splash ---------------- */
  function initSplash() {
    var splash = document.querySelector("[data-splash]");
    if (!splash) return;
    var hide = function () { splash.classList.add("is-out"); };
    if (document.readyState === "complete") setTimeout(hide, 500);
    else window.addEventListener("load", function () { setTimeout(hide, 400); });
    setTimeout(hide, 3500);
  }

  /* ---------------- nav solidify + burger ---------------- */
  function initNav() {
    var nav = document.querySelector("[data-nav]");
    if (!nav) return;
    var onScroll = function () {
      if (window.scrollY > 40) nav.classList.add("is-solid");
      else nav.classList.remove("is-solid");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    var burger = document.querySelector("[data-burger]");
    var links = document.querySelector("[data-nav-links]");
    if (!burger || !links) return;
    burger.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      burger.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        burger.classList.remove("is-open");
      });
    });
  }

  /* ---------------- custom cursor ---------------- */
  function initCursor() {
    if (!hasHover) return;
    var cursor = document.querySelector("[data-cursor]");
    if (!cursor) return;
    var dot = cursor.querySelector(".cursor-dot");
    var ring = cursor.querySelector(".cursor-ring");
    var firstMove = false;
    window.addEventListener("mousemove", function (e) {
      dot.style.transform = "translate3d(" + e.clientX + "px," + e.clientY + "px,0) translate(-50%,-50%)";
      ring.style.transform = "translate3d(" + e.clientX + "px," + e.clientY + "px,0) translate(-50%,-50%)";
      if (!firstMove) {
        firstMove = true;
        cursor.classList.add("is-ready");
      }
    });
    document.querySelectorAll("a, button, [data-tilt]").forEach(function (el) {
      el.addEventListener("mouseover", function (e) {
        if (!el.contains(e.relatedTarget)) ring.classList.add("is-hover");
      });
      el.addEventListener("mouseout", function (e) {
        if (!el.contains(e.relatedTarget)) ring.classList.remove("is-hover");
      });
    });
  }

  /* ---------------- reveal on scroll ---------------- */
  function initReveals() {
    var els = document.querySelectorAll("[data-reveal]");
    if (!els.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.02, rootMargin: "0px 0px -2% 0px" });
    els.forEach(function (el) { io.observe(el); });

    setTimeout(function () {
      document.querySelectorAll("[data-reveal]:not(.is-visible)").forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-visible");
      });
    }, 6000);
  }

  /* ---------------- count up ---------------- */
  function initCountUp() {
    var els = document.querySelectorAll("[data-count-to]");
    if (!els.length) return;
    var animate = function (el) {
      var target = parseFloat(el.getAttribute("data-count-to"));
      var duration = reduced ? 400 : 1400;
      var start = null;
      function step(ts) {
        if (!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased);
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target;
      }
      requestAnimationFrame(step);
    };
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animate(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------------- tilt on variety cards ---------------- */
  function initTilt() {
    if (!hasHover) return;
    document.querySelectorAll("[data-tilt]").forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = "perspective(900px) rotateX(" + (-y * 7) + "deg) rotateY(" + (x * 7) + "deg) translateY(-4px)";
      });
      card.addEventListener("mouseleave", function () {
        card.style.transform = "";
      });
    });
  }

  /* ---------------- pour fill effect (signature) ---------------- */
  function initPourFill() {
    var section = document.querySelector(".pour");
    var fill = document.querySelector("[data-pour-fill]");
    if (!section || !fill) return;
    var onScroll = function () {
      var rect = section.getBoundingClientRect();
      var vh = window.innerHeight;
      var progress = 1 - (rect.top + rect.height * 0.3) / (vh + rect.height * 0.3);
      progress = Math.max(0, Math.min(1, progress));
      fill.style.setProperty("--pour-progress", (progress * 100) + "%");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------------- reel videos autoplay reinforcement ---------------- */
  function initReelVideos() {
    var videos = document.querySelectorAll(".reel-video");
    if (!videos.length) return;
    var tryPlay = function (video) { video.play().catch(function () {}); };

    videos.forEach(function (video) { video.muted = true; });

    if (typeof IntersectionObserver === "undefined") {
      videos.forEach(tryPlay);
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          tryPlay(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    videos.forEach(function (video) { io.observe(video); });

    document.addEventListener("click", function () {
      videos.forEach(function (video) {
        if (video.getBoundingClientRect().top < window.innerHeight) tryPlay(video);
      });
    }, { once: true });
  }

  /* ---------------- footer year ---------------- */
  function initYear() {
    var el = document.querySelector("[data-year]");
    if (el) el.textContent = new Date().getFullYear();
  }

  function boot() {
    safe(initWhatsapp, "initWhatsapp");
    safe(initI18n, "initI18n");
    safe(initSplash, "initSplash");
    safe(initNav, "initNav");
    safe(initCursor, "initCursor");
    safe(initReveals, "initReveals");
    safe(initCountUp, "initCountUp");
    safe(initTilt, "initTilt");
    safe(initPourFill, "initPourFill");
    safe(initReelVideos, "initReelVideos");
    safe(initYear, "initYear");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
