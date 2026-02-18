// Centralized config for map/data integration.
// Keep public values here only (no private API keys).
window.OPENFIELDS_DATA_CONFIG = {
  fused: {
    // Replace with your real public data endpoint when ready.
    endpoint: "https://your-fused-or-data-endpoint.example.com/tiles-or-geojson",
    defaultCropTypes: ["corn", "soy"],
    region: "continental-us"
  },
  map: {
    provider: "mapbox-or-fused",
    containerId: "openfields-map",
    defaultZoom: 3.4,
    defaultCenter: [-98.5795, 39.8283]
  },
  cta: {
    dataPageUrl: "https://your-vercel-data-page.vercel.app"
  }
};
