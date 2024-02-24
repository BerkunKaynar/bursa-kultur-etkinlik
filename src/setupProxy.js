const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://acikyesil.bursa.bel.tr",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/api",
      },
    })
  );
};
