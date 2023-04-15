
const becomeSellerElement = document.querySelector(".become-seller")
const applyForm = document.querySelector(".apply-form")
const showAppyFormBtn = document.querySelector("#apply-btn")

window.onload = ()=>{
    if(sessionStorage.user){
        let user = JSON.parse(sessionStorage.user)
        if(compareToken(user.authToken, user.email)){
            if(!user.seller){
                becomeSellerElement.classList.remove("hide")
            }
            becomeSellerElement.classList.remove("hide")
        }
    } else{
        location.replace("/login")
    }
}

showAppyFormBtn.addEventListener("click", ()=>{
    becomeSellerElement.classList.add("hide")
    applyForm.classList.remove("hide")
})

// form submission 

const applyFormBtn = document.querySelector("#apply-form-btn")
const businessName = document.querySelector("#business-name")
const businessAddress = document.querySelector("#business-add")
const Description = document.querySelector("#business-des")
const phoneNumber = document.querySelector("#phone-number")
const termsAndconditions = document.querySelector("#terms-and-conds")
const legitInformation = document.querySelector("#legit-info")

applyFormBtn.addEventListener("click", ()=>{
    if(businessName.ariaValueText===""){
        showAlert("Insert your business name")
    } else if(businessAddress.value===""){
        showAlert("Insert your address")
    } else if(Description.value===""){
        showAlert("Fill the description of your product")
    } else if(phoneNumber.value.length < 10){
        showAlert("Invalid phone number")
    } else if(!termsAndconditions.checked){
        showAlert("check terms and conditions")
    } else if(!legitInformation.checked){
        showAlert("Check the information button")
    } else{
        SendData("/seller", {
            businessName: businessName.value,
            businessAddress: businessAddress.value,
            Description: Description.value,
            phoneNumber: phoneNumber.value,
            termsAndconditions: termsAndconditions.checked,
            legitInformation: legitInformation.checked,
            email: JSON.parse(sessionStorage.user).email
        })
    }


})