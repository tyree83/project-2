//require modules
const express = require('express');
const router = express.Router();
const plantsCtrl = require('../controllers/plants');

// routes go here
// add new plant
router.post('/', plantsCtrl.create);
// add new plant
router.get('/new', plantsCtrl.new);

router.get('/:id', plantsCtrl.show);

router.delete('/:id', plantsCtrl.delete);

router.put('/:id/', plantsCtrl.update);

router.get('/:id/edit', plantsCtrl.edit);

router.get('/', plantsCtrl.index);



module.exports = router;