var express = require('express');
var filmRouter = new express.Router();

//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');


filmRouter.get('/films/:id', function(req,res){
    res.json({data: films[req.params.id]});
})

filmRouter.get('/films', function(req, res){
  res.json({data: films})
});

filmRouter.post('/films', function(req,res){
  films.push(req.body.Film);
  res.json({data: films});
})

filmRouter.put('/films/:id', function(req,res){
  films[req.params.id] = req.body.Film;
  res.json({data:films});
})

filmRouter.delete('/films/:id', function(req,res){
  films.splice(req.params.id, 1);
  res.json({data: films});
})


module.exports = filmRouter;
