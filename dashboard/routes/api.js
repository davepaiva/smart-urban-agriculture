const express = require('express');
const router = express.Router();
const db = require('../database/knex');


const port_data= require('./port_data');
var arduinoData = port_data.sensorData;


router.get('/', (req, res)=>{
    db.select().from('dashboard').orderBy('created_at').then((data)=>{
        res.send(data);
    })
})



module.exports = router