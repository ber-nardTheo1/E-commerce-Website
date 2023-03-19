const FirstName = document.querySelector('#firstname')
const LastName = document.querySelector('#lastname')
const email = document.querySelector('#email')
const passWord = document.querySelector('#password')
const subMitBtn = document.querySelector('.submit-btn')
const termsAndconditions = document.querySelector('#terms-and-conds')

subMitBtn.addEventListener('click', ()=>{
    if(!FirstName.value.lenght){
        showAlert("Fill your first name")
    }
    else if(!LastName.value.length){
        showAlert("Fill your last name")
    }
    else if(!email.value.length){
        showAlert("enter your email")
    }

    else if(passWord.value.lenghth < 7){
        showAlert("Password should have more than 8 characters")
    }

    else if(!termsAndconditions.checked){
        showAlert("Check terms and Conditions")
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



  




