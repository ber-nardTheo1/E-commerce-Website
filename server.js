

const admin = require('firebase-admin')
const express = require('express')
const bcrypt = require('bcrypt')
const path = require('path')

let staticpath = path.join(__dirname, "")

const app = express()

app.use(express.static(staticpath))

app.listen(3000, () =>{
    console.log("listening on port 3000....")
})

app.get("/", (req, res) =>{
    res.sendFile(path.join(staticpath, "home.html"))
})

app.get("/", (req, res) =>{
    res.sendFile(path.join(staticpath, "sign.html"))
})

app.get("/", (req, res) =>{
    res.sendFile(path.join(staticpath, "login.html"))
})