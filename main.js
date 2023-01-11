const burger = document.querySelector(".burgerIcon")
let estado = "off"
const mobileMenu = document.querySelector(".linksMobile")

burger.addEventListener("click", () => {
    if(estado == "off"){
        mobileMenu.style.visibility = "visible"
        estado = "on"
    }else{
        mobileMenu.style.visibility = "hidden"
        estado = "off"
    }
})