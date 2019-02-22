const express = require('express');
const router = express.Router();
// const SerialPort = require('serialport');
// const Readline = require('@serialport/parser-readline');
// const port = new SerialPort('/dev/ttyACM1', {
//     baudRate: 9600
// });
// const db = require('../database/knex');

// function tryParseJson (str) {
//     try {
//         JSON.parse(str);
//     } catch (e) {
//         return false;
//     }
//     return JSON.parse(str);
// };

// var sensorData ; 
// const parser = port.pipe(new Readline({ delimiter: '\r\n' }));
// parser.on('data',(data)=>{
//     sensorData = tryParseJson(data);
//     db.insert(sensorData).into('dashboard').then(()=>{console.log('data inserted in database')});
// } );


module.exports = router;
// module.exports.sensorData = sensorData;