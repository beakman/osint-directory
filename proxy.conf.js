const proxyTarget = process.env['PROXY_TARGET']  || "https://api.osint.directory";

const proxy = {
    "target": proxyTarget,
    "secure": true,
    "logLevel": "debug",
    "changeOrigin": true,
}

const PROXY_CONFIG = {
  "/api/v1/*": proxy,
  "/admin/*": proxy,
  "/static/*": proxy,
  "/media/*": proxy,
};

module.exports = PROXY_CONFIG;
