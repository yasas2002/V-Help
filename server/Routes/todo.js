const express = require('express')
const router = express.Router();
const db = require('../dbConfig')

 // insert values
 router.post('/', (req, res) => {
    const message = req.body.message;
    db.query("INSERT INTO todo (message) VALUES (?)", [message], (err, result) => {
        if(err) {
           console.log(err)
        }
        else {
           res.json({message: "inserted succesfully"})
        }
    })
})

//  fetching todos
router.get('/', (req, res) => {
   db.query("SELECT * FROM todo", (err, result) => {
       if(err) {
          console.log(err)
       }
       else {
          res.json({todos: result})
       }
   })
})

module.exports = router;