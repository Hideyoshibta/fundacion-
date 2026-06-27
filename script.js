// ============================
// PROANIMALES FOUNDATION
// script.js
// ============================

// Cambia el estilo del header al hacer scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.padding = "12px 8%";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        header.style.padding = "18px 8%";
        header.style.boxShadow = "none";

    }

});


// Aparición de elementos al hacer scroll

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(".card,.counter,.gallery-grid img,.donation")
.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


// Animación contador

const counters=document.querySelectorAll(".number");

counters.forEach(counter=>{

let target=parseInt(counter.innerText);

let count=0;

let speed=target/120;

counter.innerText="0";

function update(){

count+=speed;

if(count<target){

counter.innerText=Math.floor(count)+"+";

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

}

update();

});


// Botones con efecto de pulso

setInterval(()=>{

document.querySelectorAll(".btn,.donation").forEach(btn=>{

btn.classList.add("pulse");

setTimeout(()=>{

btn.classList.remove("pulse");

},700);

});

},5000);


// Scroll suave

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});


// Mensaje al pulsar DONATE

document.querySelectorAll(".donation").forEach(button=>{

button.addEventListener("click",()=>{

alert(

`❤️ Thank you for supporting PROANIMALES!

Your generosity helps provide food, medical care, rescue missions and new opportunities for abandoned animals.

Please visit our foundation to complete your donation in person.

Every contribution makes a difference.`

);

});

});


// Efecto parallax

const hero=document.querySelector(".hero-image");

window.addEventListener("scroll",()=>{

hero.style.transform=`translateY(${window.scrollY*0.25}px)`;

});


// Crear huellas flotantes automáticamente

const emojis=["🐾","❤️","🐶","🐱"];

setInterval(()=>{

const icon=document.createElement("div");

icon.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

icon.style.position="fixed";

icon.style.left=Math.random()*100+"vw";

icon.style.bottom="-50px";

icon.style.fontSize=(20+Math.random()*18)+"px";

icon.style.opacity=".25";

icon.style.pointerEvents="none";

icon.style.zIndex="2";

icon.style.transition="6s linear";

document.body.appendChild(icon);

setTimeout(()=>{

icon.style.transform=`translateY(-120vh) rotate(${Math.random()*360}deg)`;

icon.style.opacity="0";

},100);

setTimeout(()=>{

icon.remove();

},6500);

},900);