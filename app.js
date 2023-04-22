//inport
const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const JF = require('johnny-five');

const morgan = require('morgan')
const cors = require('cors')


//init
const app = express();
const server = http.createServer(app);
const io = new Server(server);


module.exports = {
    io,
    server,
    app,
    express,
    morgan,
    cors,
    JF
};