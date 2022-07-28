const functions = require("firebase-functions");
const express = require("express");
const cors = require ("cors")

const app = express()
app.use(cors());

exports.api = functions.https.onRequest(app)

app.get('/test', (req, res) => {
    res.send('Wow, it actually worked.')
})

app.get('/anotherone', (req, res) => {
    res.send('this is gas')
})
