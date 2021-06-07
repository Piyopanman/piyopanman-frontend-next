const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCashing,
  },
});
