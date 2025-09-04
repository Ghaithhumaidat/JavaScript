const hum = document.getElementById("hum");
const menu = document.getElementById("menu");
const out = menu.querySelectorAll("a")

hum.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.toggle("active");

});

out.forEach(link => {
    link.addEventListener('click',(e)=>{

        menu.classList.remove("active")

    })
    
});

