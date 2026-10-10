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
  function currentLang() {
    return document.documentElement.getAttribute("data-lang") || "es";
  }
  function a11yText(key) {
    var entry = BRAND.a11y && BRAND.a11y[key];
    return entry ? (entry[currentLang()] || entry.es) : "";
  }
  function applyLang(lang) {
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang);

    var map = {
      "a11y.skip": BRAND.a11y && BRAND.a11y.skip,
      "age.title": BRAND.age && BRAND.age.title,
      "age.text": BRAND.age && BRAND.age.text,
      "age.yes": BRAND.age && BRAND.age.yes,
      "age.no": BRAND.age && BRAND.age.no,
      "age.denied": BRAND.age && BRAND.age.denied,
      "age.back": BRAND.age && BRAND.age.back,
      "legal.abuse": BRAND.legal && BRAND.legal.abuse,
      "legal.minors": BRAND.legal && BRAND.legal.minors,
      "legal.responsible": BRAND.legal && BRAND.legal.responsible,
      "hero.kicker": BRAND.hero && BRAND.hero.kicker,
      "hero.sub": BRAND.hero && BRAND.hero.sub,
      "hero.ctaPrimary": BRAND.hero && BRAND.hero.ctaPrimary,
      "hero.ctaSecondary": BRAND.hero && BRAND.hero.ctaSecondary,
      "nav.historia": BRAND.nav && BRAND.nav[0],
      "nav.variedades": BRAND.nav && BRAND.nav[1],
      "nav.proceso": BRAND.nav && BRAND.nav[2],
      "nav.donde": BRAND.nav && BRAND.nav[3],
      "nav.contacto": BRAND.nav && BRAND.nav[4],
      "historia.kicker": BRAND.historia && BRAND.historia.kicker,
      "historia.kicker2": BRAND.historia && BRAND.historia.kicker2,
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
      "variedades.kicker": BRAND.variedades && BRAND.variedades.kicker,
      "variedades.title": BRAND.variedades && BRAND.variedades.title,
      "variedades.item1.desc": BRAND.variedades && BRAND.variedades.items && BRAND.variedades.items[0].desc,
      "variedades.item2.desc": BRAND.variedades && BRAND.variedades.items && BRAND.variedades.items[1].desc,
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
      "donde.kicker": BRAND.donde && BRAND.donde.kicker,
      "donde.title": BRAND.donde && BRAND.donde.title,
      "donde.venue1.meta": BRAND.donde && BRAND.donde.venues && BRAND.donde.venues[0].meta,
      "donde.venue2.meta": BRAND.donde && BRAND.donde.venues && BRAND.donde.venues[1].meta,
      "donde.visit": BRAND.donde && BRAND.donde.visit,
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
      el.innerHTML = text.replace(/\n/g, "<br>");
    });

    document.querySelectorAll("[data-lang-toggle]").forEach(function (t) {
      t.textContent = lang === "es" ? "ES / EN" : "EN / ES";
    });
    var burger = document.querySelector("[data-burger]");
    if (burger) burger.setAttribute("aria-label", a11yText(burger.classList.contains("is-open") ? "menuClose" : "menuOpen"));
  }
  function initI18n() {
    var stored = "es";
    try { stored = localStorage.getItem(LANG_KEY) || "es"; } catch (e) {}
    applyLang(stored);
    document.querySelectorAll("[data-lang-toggle]").forEach(function (toggle) {
      toggle.addEventListener("click", function () {
        var next = currentLang() === "es" ? "en" : "es";
        applyLang(next);
        try { localStorage.setItem(LANG_KEY, next); } catch (e) {}
      });
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
    var setOpen = function (open) {
      links.classList.toggle("is-open", open);
      burger.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", a11yText(open ? "menuClose" : "menuOpen"));
    };
    burger.addEventListener("click", function () {
      setOpen(!links.classList.contains("is-open"));
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.querySelectorAll("a.is-picked").forEach(function (x) { x.classList.remove("is-picked"); });
        a.classList.add("is-picked");
        setTimeout(function () {
          setOpen(false);
          a.classList.remove("is-picked");
        }, reduced ? 120 : 340);
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && links.classList.contains("is-open")) {
        setOpen(false);
        burger.focus();
      }
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
    var reveal = function (el, delay) {
      if (delay) {
        el.style.transitionDelay = delay + "ms";
        el.addEventListener("transitionend", function clear(e) {
          if (e.target !== el) return;
          el.style.transitionDelay = "";
          el.removeEventListener("transitionend", clear);
        });
      }
      el.classList.add("is-visible");
    };
    var io = new IntersectionObserver(function (entries) {
      var batch = entries.filter(function (entry) { return entry.isIntersecting; });
      batch.forEach(function (entry, i) {
        reveal(entry.target, reduced ? 0 : Math.min(i, 3) * 90);
        io.unobserve(entry.target);
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
      var decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
      var duration = reduced ? 600 : 3800;
      var start = null;
      function step(ts) {
        if (!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 0.5 - 0.5 * Math.cos(Math.PI * progress);
        el.textContent = (target * eased).toFixed(decimals);
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target.toFixed(decimals);
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
        if (!card.classList.contains("is-visible")) return;
        card.classList.add("is-tilting");
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = "perspective(900px) rotateX(" + (-y * 6) + "deg) rotateY(" + (x * 6) + "deg) translateY(-4px)";
      });
      card.addEventListener("mouseleave", function () {
        card.classList.remove("is-tilting");
        card.style.transform = "";
      });
    });
  }

  /* ---------------- pour fill effect (signature) ---------------- */
  function initPourFill() {
    var section = document.querySelector(".pour");
    var fill = document.querySelector("[data-pour-fill]");
    if (!section || !fill) return;
    var ticking = false;
    var update = function () {
      ticking = false;
      var rect = section.getBoundingClientRect();
      var vh = window.innerHeight;
      var progress = 1 - (rect.top + rect.height * 0.3) / (vh + rect.height * 0.3);
      progress = Math.max(0, Math.min(1, progress));
      fill.style.setProperty("--pour-progress", (progress * 100) + "%");
    };
    var onScroll = function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
  }

  /* ---------------- hero video + scroll parallax ---------------- */
  function initHeroVideo() {
    var hero = document.querySelector(".hero");
    var bg = document.querySelector("[data-hero-bg]");
    var video = document.querySelector("[data-hero-video]");
    var inner = document.querySelector(".hero-inner");
    if (!hero || !bg) return;

    var conn = navigator.connection || {};
    var lowData = conn.saveData === true;

    if (video && !reduced && !lowData) {
      video.muted = true;
      video.preload = "auto";
      video.src = video.getAttribute("data-src");
      var play = function () { var p = video.play(); if (p && p.catch) p.catch(function () {}); };
      play();
      video.addEventListener("loadeddata", play, { once: true });
      if (typeof IntersectionObserver !== "undefined") {
        new IntersectionObserver(function (entries) {
          if (!video.src || video.readyState < 2) return;
          if (entries[0].isIntersecting) play(); else video.pause();
        }, { threshold: 0 }).observe(hero);
      }
    }

    if (reduced) return;

    var update = function () {
      var y = window.scrollY;
      var h = hero.offsetHeight || window.innerHeight;
      if (y > h * 1.2) return;
      var p = Math.max(0, Math.min(1, y / h));
      bg.style.transform = "translate3d(0," + (y * 0.35).toFixed(1) + "px,0) scale(" + (1 + p * 0.14).toFixed(4) + ")";
      bg.style.opacity = (1 - p * 0.45).toFixed(3);
      if (inner) {
        inner.style.transform = "translate3d(0," + (-y * 0.12).toFixed(1) + "px,0)";
        inner.style.opacity = Math.max(0, 1 - p * 1.25).toFixed(3);
      }
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  /* ---------------- age gate ---------------- */
  var AGE_KEY = "cp_age_ok";
  function initAgeGate() {
    var root = document.documentElement;
    var gate = document.querySelector("[data-age-gate]");
    if (!gate || root.classList.contains("age-ok")) return;

    var locked = Array.prototype.slice.call(document.querySelectorAll(".nav, main, .footer, .wa-float, .skip-link, .splash"));
    var yes = gate.querySelector("[data-age-yes]");
    var no = gate.querySelector("[data-age-no]");
    var back = gate.querySelector("[data-age-back]");
    var denied = gate.querySelector("[data-age-denied]");

    locked.forEach(function (el) { el.setAttribute("inert", ""); });
    if (yes) yes.focus();

    if (yes) yes.addEventListener("click", function () {
      try { localStorage.setItem(AGE_KEY, String(Date.now())); } catch (e) {}
      root.classList.add("age-ok");
      locked.forEach(function (el) { el.removeAttribute("inert"); });
    });
    if (no) no.addEventListener("click", function () {
      gate.setAttribute("data-state", "denied");
      if (denied) denied.focus();
    });
    if (back) back.addEventListener("click", function () {
      gate.removeAttribute("data-state");
      if (yes) yes.focus();
    });
  }

  /* ---------------- process timeline ---------------- */
  function initSteps() {
    var list = document.querySelector("[data-steps]");
    if (!list) return;
    var steps = list.querySelectorAll(".step");

    var ticking = false;
    var update = function () {
      ticking = false;
      var rect = list.getBoundingClientRect();
      var mid = window.innerHeight * 0.5;
      var progress = (mid - rect.top) / rect.height;
      list.style.setProperty("--steps-progress", Math.max(0, Math.min(1, progress)).toFixed(3));
      var active = -1;
      steps.forEach(function (step, i) {
        var r = step.getBoundingClientRect();
        if (r.top <= mid) active = i;
      });
      steps.forEach(function (step, i) { step.classList.toggle("is-active", i === active); });
    };
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  /* ---------------- footer year ---------------- */
  function initYear() {
    var el = document.querySelector("[data-year]");
    if (el) el.textContent = new Date().getFullYear();
  }

  function boot() {
    safe(initWhatsapp, "initWhatsapp");
    safe(initI18n, "initI18n");
    safe(initAgeGate, "initAgeGate");
    safe(initSplash, "initSplash");
    safe(initNav, "initNav");
    safe(initHeroVideo, "initHeroVideo");
    safe(initCursor, "initCursor");
    safe(initReveals, "initReveals");
    safe(initCountUp, "initCountUp");
    safe(initTilt, "initTilt");
    safe(initPourFill, "initPourFill");
    safe(initSteps, "initSteps");
    safe(initYear, "initYear");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
