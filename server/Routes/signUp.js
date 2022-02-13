const express = require("express");
const router = express.Router();
const app = express();
const db = require('../dbConfig')

router.post('/',(req, res) => {
    
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword

    db.query("INSERT INTO signin (name, email, password, confirmPassword) VALUES (?, ?, ?, ?)",[name, email, password, confirmPassword], (err2, result2) => {
        if(err2) {
            console.log(err2)
        }
        else {
            res.json({message: "Account Created succesfully...."})
        }
    })
})

module.exports = router;