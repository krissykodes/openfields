/**
 * Entry point for data engineers to wire fused/map providers into the landing page.
 * This is intentionally lightweight until real provider credentials/endpoints are finalized.
 */
(function initOpenfieldsDataLayer() {
  const config = window.OPENFIELDS_DATA_CONFIG;
  if (!config) return;

  // Placeholder hook for future map mount logic.
  // Example usage:
  // const mapEl = document.getElementById(config.map.containerId);
  // if (mapEl) mountMapWithProvider(mapEl, config);
  window.openfieldsDataLayer = {
    config,
    ready: true
  };
})();
