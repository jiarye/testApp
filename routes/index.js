var express = require('express');
var router = express.Router();


//引入文件夹的别名

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页' });
});

router.get('app/home', function(req, res, next) {
  res.render('app/home', { title: '主页' });
});
module.exports = router;
