//require modules
const express = require('express');
const router = express.Router();
const plantsCtrl = require('../controllers/plants');

// routes go here
router.get('/', plantsCtrl.index);
// add new plant
router.get('/new', plantsCtrl.new);
// add new plant
router.post('/', plantsCtrl.create);

router.get('/:id', plantsCtrl.show);

router.delete('/:id', plantsCtrl.delete);

router.get('/:id/edit', plantsCtrl.edit);

// router.put('/:id/', plantsCtrl.update);




module.exports = router;