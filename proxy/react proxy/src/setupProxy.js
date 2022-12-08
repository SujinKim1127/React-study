const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', //proxy가 필요한 path prameter 입력하기
    createProxyMiddleware({
      target: 'http://localhost:5000', //타겟이 되는 api url 입력하기
      changeOrigin: true, //대상 서버 구성에 따라 호스트 헤더가 변경되도록 설정
    })
  );
};