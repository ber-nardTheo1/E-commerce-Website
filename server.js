// importing packages
const admin = require('firebase-admin')
const express = require('express')
const bcrypt = require('bcrypt')
const path = require('path')

// firebasecode admin setup 
var serviceAccount = require("C:/Users/theom/OneDrive/Desktop/E-commerce/e-commerce-3218e-firebase-adminsdk-swwyo-001108572c.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore()

let staticpath = path.join(__dirname, "")

const app = express()

app.use(express.static(staticpath))
app.use(express.json())

app.listen(3000, () =>{
    console.log("listening on port 3000....")
})
app.get("/", (req, res) =>{
    res.sendFile(path.join(staticpath, "home.html"))
})

app.get("/seller", (req, res) =>{
    res.sendFile(path.join(staticpath, "seller.html"))
})

app.get("/sign", (req, res)=>{
    res.sendFile(path.join(staticpath, "sign.html"))
})


app.post("/sign", (req, res) =>{
   let {FirstName,  LastName,    email,  password, Notification,  termsAndconditions}= req.body
   if(FirstName===""){
    return res.json({"alert":"Fill your first name"})
   }
   else if(LastName===""){
    return res.json({"alert":"Fill your last name"})
   }
   else if(email===""){
    return res.json({"alert":"Fill your email"})
   }
   else if(password===""){
    return res.json({"alert":"Password should not be empty"})
   }
   else if(password.length < 8){
    return res.json({"alert":"Password should have more than 8 characters"})
   }
   else if(!termsAndconditions){
    return res.json({"alert":"Check terms and conditions"})
   }

   // store data in db
   db.collection('users').doc(email).get()
   .then(user =>{
    if(user.exists){
        return res.json({"alert":"email already exists"})
    } else{
        // encrypt password
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                req.body.password = hash;
                db.collection('users').doc(email).set(req.body)
                .then(data => {
                    res.json({
                        FirstName: req.body.FirstName,
                        LastName: req.body.LastName,
                        email: req.body.email,
                        seller: req.body.seller,
                    })
                })
            })
        })
    }

   })
   
})

app.get("/login", (req, res) =>{
    res.sendFile(path.join(staticpath, "login.html"))
})

app.use(express.json())
app.post("/login", (req, res)=>{
    let {email, password} = req.body
    if(email && password===""){
        return res.json({"alert":"Fill all your inputs"})
    }

    db.collection('users').doc(email).get()
    .then(user =>{
        if(!user.exists){
            return res.json({"alert":"Log in email does not exists"})
        } else{
            bcrypt.compare(password, user.data().password, (err, result) =>{
                if(result){
                    let data = user.data()
                    return res.json({
                        FirstName:data.FirstName,
                        LastName:data.LastName,
                        email:data.email,
                        seller:data.seller,
                    })
                } else{
                    return res.json({"alert":"password is incorrect"})
                }
            })
        }
    })
})

app.get("/seller", (req, res) =>{
    res.sendFile(path.join(staticpath, "seller.html"))
})


app.post("/seller", (req, res)=>{
    let{ businessName, businessAddress, Description, phoneNumber, termsAndconditions, legitInformation, email} = req.body
    if(businessName.ariaValueText===""){
        return res.json({"alert":"Insert your business name"})
    } else if(businessAddress.value===""){
        return res.json({"alert":"Insert your address"})
    } else if(Description.value===""){
        return res.json({"alert":"Fill the description of your product"})
    } else if(phoneNumber.value){
        return res.json({"alert":"Invalid phone number"})
    } else if(!termsAndconditions){
        return res.json({"alert":"check terms and conditions"})
    } else if(!legitInformation){
        return res.json({"alert":"Check the information button"})
    } else{
        db.collection("sellers").doc(email).set(req.body)
        .then(data =>{
            db.collection("users").doc(email).update({
                seller:true
            }) .then(data =>{
                res.json(true)
            })

        })
    }

})