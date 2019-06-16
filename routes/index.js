var express = require('express');
var router = express.Router();
const proxy = require('http-proxy-middleware');
const cors = require('cors');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/api', proxy({
    target: 'http://192.168.3.342',
    changeOrigin: true,
    pathRewrite: {
      '/api': '/'
    }
}))

module.exports = router;
