const express = require("express");
const router = express.Router();
const app = express();
const db = require('../dbConfig')

router.post('/',(req, res) => {
    
    const name = req.body.name
    const password = req.body.password

    db.query("SELECT * FROM signin WHERE name=? AND password=?",[name, password], (err2, result2) => {
        if(err2) {
            console.log(err2)
        }
        else {
            console.log(result2.length)
            if(result2.length > 0) {
                res.json({message: 'Login successful...'})
            } else {
                res.json({message: 'Invalid credentials...'})
            }
        }
    })
})

module.exports = router;