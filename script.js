const form = document.querySelector(".waitlist-form");
const heroVideo = document.querySelector(".hero-video");

if (heroVideo) {
  const tryPlayVideo = () => {
    heroVideo.play().catch(() => {
      // Retry on first user interaction if autoplay is blocked by browser policy.
      const onFirstInteraction = () => {
        heroVideo.play().catch(() => {});
      };
      document.addEventListener("pointerdown", onFirstInteraction, { once: true });
      document.addEventListener("keydown", onFirstInteraction, { once: true });
    });
  };

  if (heroVideo.readyState >= 2) {
    tryPlayVideo();
  } else {
    heroVideo.addEventListener("canplay", tryPlayVideo, { once: true });
  }
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.textContent = "Thanks! You're on the waitlist.";
      submitButton.setAttribute("disabled", "disabled");
    }
  });
}
