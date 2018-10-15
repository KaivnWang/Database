var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json([{
  	id: 1,
  	username: "王文奕"
  }, {
  	id: 2,
  	username: "林凱威"
  },{
    id: 3,
    username: "丁俊嘉"
  }]);
});

module.exports = router;
