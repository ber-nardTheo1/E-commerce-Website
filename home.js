const CreateNav = () =>{
    const Nav = document.querySelector("nav")

    Nav.innerHTML=`
        <div id="container" class="container">
            <div class="nav navbar-types">
                <ul>
                    <li class="nav-link" ><a id="home-el" href="home.html">Home</a></li>
                    <li  class="nav-link" ><a id="men-el" href="">Men</a></li>
                    <li  class="nav-link" ><a id="women-el" href="">Women</a></li>
                    <li  class="nav-link" ><a id="kids-el" href="">Kids</a></li>
                    <li  class="nav-link" ><a id="accessories-el" href="">Accensories</a></li>
                 </ul> 
            </div>
            <div class="search-bar">
                <input type="text" class="search-box" placeholder="search brand, product">
                <button class="search-btn">search</button>
            </div>
            <div class="cart-user">
                <li><a id="cart" class="cart-btn" href=""><img class="shopping-cart"src="icons/shopping-cart.png"/></a></li>
            </div>
            <div class="login-logout-popup">
                <li><a id="login" class="login-btn" href="login.html"><img class="user-login"src="icons/user.png"/></a></li>
                <li><a id="logout" class="logout-btn" href="">Logout</a></li>
                <li><a id="signin" class="sign-btn" href="sign.html">Register</a></li>
            </div>
        </div>`
        
}

CreateNav()

const Privacy = ` <p> Copyright © ${new Date().getFullYear()} Bernard Malunga </p>`
document.getElementById("copyrights-el").innerHTML = Privacy

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

window.onload()