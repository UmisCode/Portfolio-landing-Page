document.addEventListener("DOMContentLoaded", function(){
    const hamburger = document.getElementById("hamburger")
    const mainUl = document.getElementById("mainUl")

    hamburger.addEventListener("click", function(){
        this.classList.toggle("active")
        mainUl.classList.toggle("active")

    })

})


const Navlinks = document.querySelectorAll(".main-ul li a");
Navlinks.forEach(links => {
    links.addEventListener('click',function () {
        if (mainUl.classList.contains("active")) {
            hamburger.classList.remove('active');
            mainUl.classList.remove('active')
            
        } 
    })
    
});























