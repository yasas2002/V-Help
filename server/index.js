const express = require('express')
const cors = require('cors')
const url = require('url');

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const fileUpload = require("express-fileupload");
app.use(fileUpload());

const db = require('./dbConfig')

const signUpRoute = require('./Routes/signUp')
const signInRoute = require('./Routes/signin')
const askAQuestion = require('./Routes/aksAQuestion')
const answeringQuestion = require('./Routes/answeringQuestion')
const library = require('./Routes/library')
const todo = require('./Routes/todo')

app.use('/signUp', signUpRoute)
app.use('/signin', signInRoute)
app.use('/askAQuestion', askAQuestion)
app.use('/answeringQuestion', answeringQuestion)
app.use('/library', library)
app.use('/todo', todo)

app.listen(3001, function () {
    console.log('running on port ' + 3001 + '!');
});