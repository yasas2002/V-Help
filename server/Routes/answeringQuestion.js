const express = require('express')
const router = express.Router();
const db = require('../dbConfig')

router.post('/', (req, res) => {
    const whoIsReplying = req.body.whoIsReplying;
    const forWhichQuestion = req.body.forWhichQuestion;
    const answer = req.body.answer;


    db.query('INSERT INTO answerAQuestion (whoIsReplying, forWhichQuestion, answer) VALUES (?, ?, ?)', [whoIsReplying, forWhichQuestion, answer], (err, result) => {
        if(err) {
            console.log(err)
        }
        else {
            console.log("answer inserted succesfully")
        }
    })
})

router.get('/', (req, res) => {
    db.query('SELECT * FROM answerAQuestion', (err, result) => {
        if(err) {
            console.log(err)
        }
        else {
            res.json({answers: result})
            console.log("answers fetched succesfully")
        }
    })
})

module.exports = router