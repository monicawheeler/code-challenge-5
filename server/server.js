const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const messagesRouter = require('./routes/messages.router');


/** ---------- MIDDLEWARE ---------- **/
app.use(express.static('server/public/'));
app.use(bodyParser.json()); // needed for angular requests

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/messages', messagesRouter);

/** ---------- MONGOOSE ------------ **/
const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/messages-app';

// connect to mongoDB
mongoose.connect(databaseUrl);

// output from connection events
mongoose.connection.on('connected', () => {
    console.log('mongoose is connected');    
});

mongoose.connection.on('error', () => {
    console.log('mongoose connection failed'); 
});


/** ---------- START SERVER ---------- **/
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});