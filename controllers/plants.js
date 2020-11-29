const Plant = require('../models/plant.js')



function index(req, res) {
  Plant.find({}, function (err, plants) {
    res.render('plants/index', { plants });
  });
}

function newPlant(req, res) {
  res.render('plants/new');
}

function create(req, res) {
  console.log(req.body)
  req.body.done = false
  Plant.create(req.body, function(err, plant) {
    res.redirect("/plants")
  });
}

function show(req, res) {
  Plant.findById(req.params.id, function (err, plant) {
    res.render('plants/show', { plant });
  });
}

function edit(req, res) {
  Plant.findById(req.params.id, function (err, plant) {
    res.render('plants/edit', {
      plant
    });
  });
}

function deletePlant(req, res) {
  Plant.findByIdAndDelete(req.params.id, function (err, plant) {
    res.redirect('/plants')
  });
}

module.exports = {
  index,
  new: newPlant,
  create,
  show,
  edit,
  delete: deletePlant
};


// function update(req, res) {
//   Plant.findByIdAndUpdate(req.params.id, req.body, function (err, plant) {
//     res.redirect('/plants')
//   });
// }






