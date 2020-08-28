var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/reg', function(req, res, next) {
  console.log(req.body);
});
router.post('/login', function(req, res, next) {
  console.log(req.body);
  res.send({errno:0,msg:"ok"});
});


module.exports = router;
