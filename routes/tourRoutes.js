const express = require('express');
const { getTours, createTours, getToursById } = require('../controllers/tourControllers');
const router = express.Router()


router.route('/')
.get(getTours)
.post(createTours)

router.route('/trending')
.get()

router.route('/cheapset')
.get()

router.route('/:id')
.get(getToursById)
.patch()




module.exports = router