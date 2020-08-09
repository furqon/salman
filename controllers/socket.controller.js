
const 
  express = require('express'),
  http = require('http'),
  socketio = require('socket.io');

const app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
io.origins('*:*');
io.on('connection', function (socket) {
  console.log('Connected succesfully to the socket ...');

  var news = [
      { title: 'The cure of the Sadness is to play Videogames',date:'04.10.2016'},
      { title: 'Batman saves Racoon City, the Joker is infected once again',date:'05.10.2016'},
      { title: 'Deadpool doesnt want to do a third part of the franchise',date:'05.10.2016'},
      { title: 'Quicksilver demand Warner Bros. due to plagiarism with Speedy Gonzales',date:'04.10.2016'},
  ];

  // Send news on the socket
  socket.emit('news', news);

  socket.on('my other event', function (data) {
      console.log(data);
  });
});
// const db = require("../models");
// const Tutorial = db.tutorials;
// const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.test = (req, res) => {
  // Validate request
  res.status(400).send({
    message: "socket back!"
  });
};