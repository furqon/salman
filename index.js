// https://bezkoder.com/node-js-express-sequelize-mysql/
// https://bezkoder.com/vue-js-node-js-express-mysql-crud-example/
// https://github.com/binitghetiya/express-sequelize-api-boilerplate
// https://www.digitalocean.com/community/tutorials/vuejs-vue-socketio
// https://ourcodeworld.com/articles/read/272/how-to-use-socket-io-properly-with-express-framework-in-node-js


const 
  express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  http = require('http');
  // io = require('socket.io')(http),
  // socketio = require('socket.io');
/*
const app = express();
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const db = require('./models');

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to salman apps.' });
});
app.get('/clients', (req, res) => {
  res.send(Object.keys(io.sockets.clients().connected))
});

require('./routes/tutorial.routes')(app);

io.on('connection', socket => {
  console.log(`A user connected with socket id ${socket.id}`)

  socket.broadcast.emit('user-connected', socket.id)

  socket.on('disconnect', () => {
    socket.broadcast.emit('user-disconnected', socket.id)
  })

  socket.on('nudge-client', data => {
    socket.broadcast.to(data.to).emit('client-nudged', data)
  })
})

http.listen(8080, () => {
  console.log('Listening on *:8080')
})
*/

const app = express();
app.use(cors({
  origin: 'http://localhost:9528'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./models');
// db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log('Drop and re-sync db.');
// });

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to salman apps.' });
});

require('./routes/tutorial.routes')(app);
require('./routes/auth.routes')(app);
require('./routes/socket.routes')(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

/*
var app = require('express')()
var cors = require('cors')
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
})

app.use(cors({
  origin: 'http://localhost:9528'
}));

require('./routes/tutorial.routes')(app);

app.get('/clients', (req, res) => {
  res.send(Object.keys(io.sockets.clients().connected))
})

// io.on('connection', socket => {
//   console.log(`A user connected with socket id ${socket.id}`)

//   socket.broadcast.emit('user-connected', socket.id)

//   socket.on('disconnect', () => {
//     socket.broadcast.emit('user-disconnected', socket.id)
//   })

//   socket.on('nudge-client', data => {
//     socket.broadcast.to(data.to).emit('client-nudged', data)
//   })
// })

io.on("connection", onNewWebsocketConnection);
let secondsSinceServerStarted = 0;
setInterval(() => {
    secondsSinceServerStarted++;
    io.emit("seconds", secondsSinceServerStarted);
    io.emit("online", onlineClients.size);
}, 1000);


http.listen(8080, () => {
  console.log('Listening on *:8080')
})

// from socketio
let nextVisitorNumber = 1;
let onlineClients = new Set();

function generateRandomNumber() {
    return (Math.floor(Math.random() * 1000)).toString();
}

function onNewWebsocketConnection(socket) {
    console.info(`Socket ${socket.id} has connected.`);
    onlineClients.add(socket.id);

    socket.on("disconnect", () => {
        onlineClients.delete(socket.id);
        console.info(`Socket ${socket.id} has disconnected.`);
    });

    // echoes on the terminal every "hello" message this socket sends
    socket.on("hello", helloMsg => console.info(`Socket ${socket.id} says: "${helloMsg}"`));

    // will send a message only to this socket (different than using `io.emit()`, which would broadcast it)
    socket.emit("welcome", `Welcome! You are visitor number ${nextVisitorNumber++}`);
}
*/