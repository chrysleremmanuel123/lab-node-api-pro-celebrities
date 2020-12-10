const express = require('express');
var router = express.Router()
var ObjectId = require('mongoose').Types.ObjectId

var { Celeb } = require('../model/User');

//getting data
router.get('/', (req, res) => {
    Celeb.find((err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(404).json({ error: "Not able to fetch the data! Try again after some time" })
        }
    })
})

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(404).json({ error: "The celebrity with the specified ID does not exist." })
    }
    else {
        Celeb.findOne({ "_id": req.params.id }, (err, docs) => {
            if (err) {
                res.status(404).json({ error: "Not able to fetch the data! Try again after some time" })
            } else {
                res.send(docs)
            }
        })
    }

})
router.post('/', (req, res) => {
    if (req.body.name == '') {
        res.status(404).json({ error: 'Please provide name for the Celebrity' })
    }
    else {
        const celeb = new Celeb({
            name: req.body.name,
            occupation: req.body.occupation,
            catchPhrase: req.body.catchPhrase
        })
        celeb.save((err, docs) => {
            if (err) {
                res.status(404).json({ errorMessage: "There was an error while saving the celebrity to the database" })
            }
            else {
                res.status(200).json({ success: docs })
            }
        })
    }
})
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(404).json({ error: "The celebrity with the specified ID does not exist." })
    }
    else if (req.body.name == '') {
        res.status(404).json({ error: 'Please provide name for the Celebrity' })
    }
    else {
        var celeb = ({
            name: req.body.name,
            occupation: req.body.occupation,
            catchPhrase: req.body.catchPhrase
        })
        Celeb.updateOne({ "_id": req.params.id }, celeb, (err, docs) => {
            if (err) {
                res.status(404).json({ error: "Some error occured ! please try after some time" })
            }
            else {
                res.send(docs)
            }
        })
    }
})
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(404).json({ error: "The celebrity with the specified ID does not exist." })
    } else {
        Celeb.deleteOne({ "_id": req.params.id }, (err, docs) => {
            if (err) {
                res.status(404).json({ error: "Some error occured ! please try after some time" })
            } else {
                res.send(`Celebrity with ${req.params.id} is deleted`)
            }

        })
    }

})
module.exports = router