

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

app.use(express.json())
app.post("/", (req, res) =>{
    let {FirstName, LastName, email, passWord, termsAndconditions} = req.body

    if(FirstName===""){
        return res.json({'alert':'Fill your first name'})
    }

    else if(LastName===""){
        return res.json({'alert':'Fill your last name'})
    }

    else if(email===""){
        return res.json({'alert':'fill your email address'})
    }

    else if(passWord.length < 8){
        return res.json({'alert':'Password should have more than 8 characters'})
    }
    else if(!termsAndconditions){
        return res.json({'alert':'check terms and conditions'})
    }
})

app.get("/", (req, res) =>{
    res.sendFile(path.join(staticpath, "login.html"))
})