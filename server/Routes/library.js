const express = require('express')
const router = express.Router();
const db = require('../dbConfig')

router.get('/', (req, res) => {

    const input = req.query.input
    db.query(`SELECT * FROM library WHERE bookName LIKE '%${input}%'`, (err, result) => {
        if(err) {
            console.log(err)
        }
        else {
            res.json({books: result})
            console.log("library books fetched succesfully")
        }
    })
})

module.exports = router