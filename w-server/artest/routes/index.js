var express = require('express');
var path = require('path');
var router = express.Router();
const viewPath = path.join(path.dirname(__dirname), 'views');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(viewPath, 'index.html'));
});
router.get('/AR', function(req, res, next) {
  res.sendFile(path.join(viewPath,'AR.html'));
});
router.get('/AR2', function(req, res, next) {
  res.sendFile(path.join(viewPath,'AR2.html'));
});
router.get('/AR3', function(req, res, next) {
  res.sendFile(path.join(viewPath,'AR3.html'));
});
router.get('/map', function(req, res, next) {
  res.sendFile(path.join(viewPath,'map.html'));
});
router.get('/ar-a-frame', function(req, res, next) {
  res.sendFile(path.join(viewPath,'ar-a-frame.html'));
});

module.exports = router;
