const express = require('express');
const router = express.Router();
// import match model
const Match = require('../models/match');

// Business Logic: Get ALL matches
router.get("/", (req, res) => {
    console.log('Here into business logic of Get ALL matches');
    Match.find((err, docs) => {
        if (err) {
            console.log('error with DB', err);
        } else {
            res.status(200).json({
                result: docs,
                message: 'Here all matches'
            });
        }
    });
});
// Business Logic: Add match object
router.post("/", (req, res) => {
    console.log('here into add match', req.body);
    const matchObj = new Match(
        {
            teamOne: req.body.teamOne,
            teamTwo: req.body.teamTwo,
            scoreOne: req.body.scoreOne,
            scoreTwo: req.body.scoreTwo
        }
    );
    matchObj.save((err, result) => {
        console.log('Here result', result);
        if (err) {
            console.log('Here err', err);
        }
        else {
            res.status(200).json({
                message: 'Added with success'
            });
        }
    });
});

// Business logic: Get match by ID
router.get("/:id", (req, res) => {
    console.log('Here into get match by id', req.params.id);
    Match.findOne({ _id: req.params.id }).then(
        (data) => {
            console.log('Here finded Match', data);
            if (data) {
                res.status(200).json({
                    result: data
                })
            }
        }
    );
});

// Business Logic: Edit match
router.put("/:id", (req, res) => {
    console.log('Here into edit match id', req.params.id);
    console.log('Here into edit match body', req.body);
    Match.updateOne({ _id: req.params.id }, req.body).then(
        (data) => {
            console.log('Here data after edit', data);
            res.status(200).json({
                message: 'Edited with success'
            })
        }
    )

});

// Business Logic: Search Matches by Team One (GET)
router.get("/search/:teamOne", (req, res) => {
    console.log('Getted team one', req.params.teamOne);
    Match.find({ teamOne: req.params.teamOne }).then(
        (data) => {
            console.log(`Here all matches where teamOne== ${req.params.teamOne}`, data);
            if (data) {
                res.status(200).json({
                    findedMatches: data
                })
            }
        }
    )
});

// Business Logic: Search Matches by Team One (POST)
router.post("/search", (req, res) => {
    console.log('Getted team one', req.body);
    Match.find({ teamOne: req.body.teamOne }).then(
        (data) => {
            console.log(`Here all matches where teamOne== ${req.body.teamOne}`, data);
            if (data) {
                res.status(200).json({
                    findedMatches: data
                })
            }
        }
    )
});

// Business Logic: Delete match by id
router.delete("/:id", (req, res) => {
    console.log('Here into delete by id', req.params.id);
    Match.deleteOne({ _id: req.params.id }).then(
        (data) => {
            console.log('Here data after delete', data);
            if (data.deletedCount == 1) {
                res.status(200).json({
                    message: 'Deleted with success'
                });
            } else {
                console.log('Error into delete');
                res.status(200).json({
                    message: 'Error with ID'
                });
            }

        }
    )
});

module.exports = router;
