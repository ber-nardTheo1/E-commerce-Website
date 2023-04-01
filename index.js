// redirect to home page if user logged in 
window.onload = () =>{
    if(sessionStorage.user){
        user = JSON.parse(sessionStorage.user)
        if(compareToken(user.authToken, user.email)){
            location.replace('/')
        }
}
}

const loader= document.querySelector('.loader')

const FirstName = document.querySelector('#firstname') || null
const LastName = document.querySelector('#lastname') || null
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const subMitBtn = document.querySelector('.submit-btn')
const termsAndconditions = document.querySelector('#terms-and-conds') || null
const Notification = document.querySelector('#notification') || null

subMitBtn.addEventListener('click', ()=>{
    if(FirstName && LastName != null){
        if(FirstName.value===""){
            showAlert("Fill your first name")
        }
        else if(LastName.value===""){
            showAlert("Fill your last name")
        }
        else if(email.value===""){
            showAlert("enter your email")
        }
        else if(password.value===""){
            showAlert("Enter password")
        }
        else if(password.value.lenghth < 7){
            showAlert("Password should have more than 8 characters")
        }
        else if(!termsAndconditions.checked){
            showAlert("Check terms and Conditions")
        }
        else{
            loader.style.display="block"
            // submit form
            SendData('/sign', {
                FirstName: FirstName.value,
                LastName: LastName.value,
                email: email.value,
                password: password.value,
                Notification: Notification.checked,
                termsAndconditions: termsAndconditions.checked,
                seller: false
            })
        }

    } else {
        // logine page 
        if(email.value || password.value===""){
            showAlert("Fill your user name or password")
        } 
    }
    
})

const showAlert = (msg) =>{
    const AlertBox = document.querySelector('.alert-box')
    const AlertMessage = document.querySelector('.alert-msg')
    AlertMessage.innerHTML=msg
    AlertBox.classList.add('show')
    setTimeout(() => {
        AlertBox.classList.remove('show')
        
    }, 3000);

}

const SendData = (path, data)=>{
    fetch(path, {
        method: 'post',
        headers: new Headers({'content-Type': 'application/json'}),
        body: JSON.stringify(data)
    }).then((res) => res.json())
    .then(response =>{
        processData(response)
    })

  

}

const processData =(data) =>{
    loader.style.display=null
    if (data.alert){
        showAlert(data.alert)
    }
    else if(data.FirstName && data.LastName){
        //create an authtoken
        data.authToken = generateToken(data.email)
        sessionStorage.user = JSON.stringify(data)
        location.replace('/')
    }
    


}

    





  




