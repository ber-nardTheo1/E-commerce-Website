// redirect to home page if user logged in 
window.onload = () =>{
    if(sessionStorage.user){
        user = JSON.parse(sessionStorage.user)
        if(compareToken(user.authToken, user.email)){
            location.replace('/home')
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
            sendData('/sign', {
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
        // login page 
        if(email.value && password.value ===""){
            showAlert("fill the inputs")
        } else {
            loader.style.display="block"
            // submit form
            sendData('/login', {
                email: email.value,
                password: password.value,
                
            })
            

        }
    }
    
})