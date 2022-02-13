const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'react'
})

db.connect((err) => {
    if(err) {
        console.log(err)
    }
    else {
        console.log("mysql connected....")
    }
})

// creating signUpTable table
let signUpTable = 'CREATE TABLE IF NOT EXISTS signin (id INT AUTO_INCREMENT, name VARCHAR(255), email VARCHAR(255), password VARCHAR(255),confirmPassword VARCHAR(255), PRIMARY KEY(id))';
db.query(signUpTable, (err, result) => {
    if(err) console.log(err)
    else console.log("signin table created succesfully")
})

// creating Ask a question table
let askAQuestion = 'CREATE TABLE IF NOT EXISTS askAQuestion (id INT AUTO_INCREMENT, name VARCHAR(255), question VARCHAR(255), body Text, imageUrl VARCHAR(255), tags VARCHAR(255), PRIMARY KEY(id))';
db.query(askAQuestion, (err, result) => {
    if(err) console.log(err)
    else console.log("Ask a Question table created succesfully")
})

// creating answer a question table
let answerAQuestion = 'CREATE TABLE IF NOT EXISTS answerAQuestion (id INT AUTO_INCREMENT, whoIsReplying VARCHAR(255), forWhichQuestion INT, answer Text, PRIMARY KEY(id))';
db.query(answerAQuestion, (err, result) => {
    if(err) console.log(err)
    else console.log("answerAQuestion table created succesfully")
})

// creating library table
let libraryTable = 'CREATE TABLE IF NOT EXISTS library (id INT AUTO_INCREMENT, bookName VARCHAR(255), PRIMARY KEY(id))';
db.query(libraryTable, (err, result) => {
    if(err) console.log(err)
    else console.log("library table created succesfully")
})

 // create database
 let createDataBase = 'CREATE database IF NOT EXISTS reactTodoapp';
 db.query(createDataBase, (err, result) => {
     if(err) console.log(err)
     else console.log('Created database succesfully')
 })

 // create todo table
 let todoAppTable = 'CREATE TABLE IF NOT EXISTS todo (id int AUTO_INCREMENT, message TEXT, PRIMARY KEY(id))';
 db.query(todoAppTable, (err, result) => {
     if(err) console.log(err)
     else console.log("todo table created succesfully")
 })


module.exports = db;