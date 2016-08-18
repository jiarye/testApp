var express = require('express');
var router = express.Router();

/* GET home page. 定义网站主页的路由*/
 router.get('/', function(req, res, next) {
   res.render('index', { title: '首页' });
 });

//主页
 router.get('/home', function(req, res, next) {
   res.render('home', { title: '主页' });
 });

//帮助
 router.get('/help', function(req, res, next) {
   res.render('help', { title: '帮助' });
 });

//娱乐
router.get('/recreation', function(req, res, next) {
   res.render('recreation', { title: '娱乐' });
 });

//个人中心
router.get('/uCenter', function(req, res, next) {
   res.render('uCenter', { title: '个人中心' });
 });

//搜索
router.get('/search', function(req, res, next) {
   res.render('search', { title: '搜索' });
 });

//学习
router.get('/study', function(req, res, next) {
   res.render('study', { title: '学习' });
 });

//设置
router.get('/setting', function(req, res, next) {
   res.render('setting', { title: '设置' });
 });

//好友
router.get('/gFrinds', function(req, res, next) {
   res.render('gFrinds', { title: '好友' });
 });


module.exports = router;


