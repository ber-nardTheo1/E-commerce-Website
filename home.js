const CreateNav = () =>{
    const Nav = document.querySelector("nav")

    Nav.innerHTML=`
        <div id="container" class="container">
            <div class="nav navbar">
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
                <a id="cart" class="cart-btn" href="">Cart</a>
                <a id="login" class="login-btn" href="login.html">Login</a>
                <a id="signin" class="login-btn" href="sign.html">Register</a>

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