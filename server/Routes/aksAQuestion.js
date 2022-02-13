const express = require('express')
const router = express.Router();
const db = require('../dbConfig')

router.post('/', (req, res) => {
    const name = req.body.name;
    const question = req.body.question;
    const body = req.body.body
    const tags = req.body.tags

    console.log(name, question, body, tags)

    var file;

    if(!req.files)
    {
        res.send("File was not found");
        return;
    }
    

    file = req.files.image; 
    const fileExtensionArray = file.name.split(".");
    const fileExtension = fileExtensionArray[fileExtensionArray.length - 1];
    const fileName = Date.now() + "." + fileExtension;
    
    file.mv(`D:/React/client/public/uploads/${fileName}`, err => {
      if(err) {
          console.log(err)
      }  
    })

    db.query('INSERT INTO askAQuestion (name, question, body, imageUrl, tags) VALUES (?, ?, ?, ?, ?)', [name, question, body, fileName, tags], (err, result) => {
        if(err) console.log(err)
        else console.log("post inserted succesfully")
    })

    res.json({ fileName: fileName, filePath: `/uploads/${fileName}` })
})


// getting all questions
router.get('/', (req, res) => {

    db.query("SELECT * FROM askAQuestion", (err, result) => {
        if(err) {
            console.log(err)
        } else {
            console.log(result)
            res.json({ result: result })
        }
    })
})

module.exports = router;