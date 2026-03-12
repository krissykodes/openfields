const autoplayVideos = document.querySelectorAll(".hero-background-video, .preview-demo-video");

autoplayVideos.forEach((video) => {
  const tryPlayVideo = () => {
    video.play().catch(() => {
      const onFirstInteraction = () => {
        video.play().catch(() => {});
      };
      document.addEventListener("pointerdown", onFirstInteraction, { once: true });
      document.addEventListener("keydown", onFirstInteraction, { once: true });
    });
  };

  if (video.readyState >= 2) {
    tryPlayVideo();
  } else {
    video.addEventListener("canplay", tryPlayVideo, { once: true });
  }
});
