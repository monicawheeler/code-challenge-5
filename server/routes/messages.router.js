const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const messagesSchemaModule = require('../modules/schema.module');

let messagesSchema = messagesSchemaModule;
let Messages = mongoose.model('Messages', messagesSchema);

// POST route
router.post('/', (req, res) => {
    let messageToAdd = new Messages(req.body);
    // create a new Document in our database and collection
    messageToAdd.save( (error, savedMessage) => {
        if (error) {
            // console.log('error on save: ', error);
            res.sendStatus(500);            
        } else {
            // console.log('new message Document: ', savedMessage);            
            res.sendStatus(201);
        }
    }); // end save
}); // end post route


// GET route
router.get('/', (req, res) => {
    Messages.find({}, (error, foundMessages) => {
        if (error) {
            // console.log('error on find: ', error);
            res.sendStatus(500);
        } else {
            // console.log('found message Documents: ', foundMessages);
            res.send(foundMessages);
        }
    }); // end find
}); // end route

// delete message by id
router.delete('/:id', (req, res) => {
    let messageId = req.params.id;
    Messages.findByIdAndRemove(
        {'_id': messageId},
        (error, removedDocument) => {
            if(error) {
                console.log('error on delete', error);
                res.sendStatus(500);
            } else {
                // console.log('document has been removed', removedDocument);
                res.sendStatus(200);
            }
        });
}); // end delete route

module.exports = router;