var express = require('express');
var router = express.Router();

//set router for homepage

router.get('/', function(req, res, next){
    res.render('index.html');
});

module.exports = router;