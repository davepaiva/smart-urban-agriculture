const express = require('express');
const app = express();
const port = process.env.PORT||8000;
const server = app.listen(port, console.log(`connected on port: ${port}`));
const io = require('socket.io')(server);
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const routeRoute = require('./routes');
app.use('/routes', routeRoute);


// const port_data= require('./routes/port_data');
// var arduinoData = port_data.sensorData;




app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
  });

  
// io.on('connection', (socket) => {
//     console.log('socket connected')
//     io.sockets.emit('serialData', arduinoData)
//     socket.on('diconnect', ()=>console.log('client disconnected'))
//     });