const express = require('express');
const router = express.Router();
const portRoute = require('./port_data');
const apiRoute = require('./api')

router.use('/port_data', portRoute);
router.use('/api', apiRoute)


module.exports = router;