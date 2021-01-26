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
  Plant.findById(req.params.id, function (err, plant) {
    plant.remove()
    plant.save(function (err) {
        res.redirect('/plants')
    })
})
}

function update(req, res) {
  Plant.findById(req.params.id, function (err, plant) {
      plant.name = req.body.name
      plant.date = req.body.date
      plant.harvest = req.body.harvest
      plant.sun = req.body.sun
      plant.notes = req.body.notes
      plant.save(function (err) {
          res.redirect('/plants')
      })
  })
}

module.exports = {
  index,
  new: newPlant,
  create,
  show,
  edit,
  update,
  delete: deletePlant
};  






