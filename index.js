const FirstName = document.querySelector('#firstname')
const LastName = document.querySelector('#lastname')
const email = document.querySelector('#email')
const passWord = document.querySelector('#password')
const subMitBtn = document.querySelector('.submit-btn')
const termsAndconditions = document.querySelector('#terms-and-conds')

subMitBtn.addEventListener('click', ()=>{
    if(FirstName===""){
        showAlert("Fill your first name")
    }
    else if(LastName===""){
        showAlert("Fill your last name")
    }
    else if(email===""){
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

const SendData = (path, data)=>{
    fetch(path, {
        method: "post",
        headers: new Headers({'content-Type': 'application/json'}),
        body: JSON.stringify(data)
    }).then((res) => res.json())
    .then(response =>{
        processData(response)
    })

    // submit form
    loader.style.display = 'block';
    SendData('/signup', {
        FirstName: FirstName.value,
        LastName: LastName,
        email: email.value,
        passWord: passWord.value,
        termsAndconditions: termsAndconditions.checked,
        seller: false
    })

  

}


    





  




