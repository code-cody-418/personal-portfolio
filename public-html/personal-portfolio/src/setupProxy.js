const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware('/apis', {
        logLevel: 'debug',
        //Change this to your backend, e.g. http://123.432.653.21:8080
        target: "https://137.184.90.178:8080",
        changeOrigin: true,
        secure: true,
    }));
};
