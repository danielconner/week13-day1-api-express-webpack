const express = require('express');
const router = new express.Router();

var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

router.get('/', function(req, res){
  res.json({data: films})
});


module.exports = router;
