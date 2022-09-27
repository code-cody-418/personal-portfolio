const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware('/apis', {
        logLevel: 'debug',
        //Change this to your backend, e.g. http://123.432.653.21:8080
        target: "http://localhost:4201",
        changeOrigin: true,
        secure: true,
    }));
};
