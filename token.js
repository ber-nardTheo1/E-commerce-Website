let char = `123abcde.fmnopqlABCDE@FJKLMNOPQRSTUVWXYZ456789stuvwxyz0!#$%&ijkrgh'*+-/=?^_${'`'}{|}~`;

const generateToken =(key)=>{
    let token = ''
    for(let i =0; i<key.length; i++){
        let index = char.indexOf(key[i]) || char.length /2
        let randomIndex = Math.floor(Math.random() * index)
        token += char[randomIndex] + char[index - randomIndex]
    }
    console.log(token, key)
    return token
}

const compareToken = (token, key) =>{
    let string = ''
    for(let i = 0; i<token.length; i+=2){
        let index1 = char.indexOf(token[i])
        let index2 = char.indexOf(token[i+1])
        string = char[index1 + index2]
    }

    if(string === key){
        return true
    }
    return false
   

}

// alert functions

const showAlert = (msg) =>{
    const AlertBox = document.querySelector('.alert-box')
    const AlertMessage = document.querySelector('.alert-msg')
    AlertMessage.innerHTML=msg
    AlertBox.classList.add('show')
    setTimeout(() => {
        AlertBox.classList.remove('show')
        
    }, 3000);

}

const sendData = (path, data)=>{
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
    } else if(data.FirstName && LastName){
        data.authToken = generateToken(data.email)
        sessionStorage.user = JSON.stringify(data)
        location.replace('/')

    } else if ( data == true){
        // seller page
        let user = JSON.parse(sessionStorage.user)
        user.seller = true 
        sessionStorage.user = JSON.stringify(user)
        location.reload()
    }
    

}