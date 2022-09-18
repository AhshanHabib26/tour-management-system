const express = require('express');
const router = express.Router()


router.route('/')
.get()
.post()

router.route('/trending')
.get()

router.route('/cheapset')
.get()

router.route('/:id')
.get()
.patch()




module.exports = router