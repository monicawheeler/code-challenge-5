const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const messagesSchemaModule = require('../modules/schema.module');

let messagesSchema = messagesSchemaModule;
let Messages = mongoose.model('Messages', messagesSchema);


module.exports = router;