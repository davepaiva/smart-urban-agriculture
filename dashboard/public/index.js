///////// Socket.io /////////////////////
var socket = io.connect('http://localhost:3000/');
        
socket.on('serialData', (data)=>{
    document.write('<p> data received</p>')
})



/////////////////////// D3 ////////////////////////
var dataArray = [1, 10, 11, 21 , 60]
var width = 500
var height = 500

var widthScale = d3.scaleLinear().domain([0, 60]).range([0, width])

var color = d3.scaleLinear().domain([0, 60]).range(["red", "blue"])

var axis = d3.axisBottom().scale(widthScale).ticks(5)


var canvas = d3.select('body').append('svg').attr('width',width).attr('height', height).append('g')
                .attr('transform', 'translate(10, 20)')

var bars = canvas.selectAll('rect').data(dataArray).enter()
                .append('rect').attr('width', (d)=>{return widthScale(d)})
                .attr('height', 50).attr('fill', (d)=>{ return color(d)}).attr('y', (d, i)=>{return i*100})


canvas.append('g').attr('transform', 'translate(0, 460)').call(axis)
                
            