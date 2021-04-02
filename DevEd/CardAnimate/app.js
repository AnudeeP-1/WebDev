const card = document.querySelector(".card");
const container = document.querySelector(".container")
const sneaker = document.querySelector(".sneaker img")
const title = document.querySelector(".title")
const desc = document.querySelector(".info h3")
const button = document.querySelector(".sizes")
const purchase = document.querySelector(".purchase")

container.addEventListener("mousemove", (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 10;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//to come back to original position
container.addEventListener("mouseleave", e => {
    card.style.transition = 'all 0.5s ease'
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    title.style.transform = `translateZ(0)`;
    desc.style.transform = `translateZ(0)`;
    button.style.transform = `translateZ(0)`;
    purchase.style.transform = `translateZ(0)`;
    sneaker.style.transform = `translateZ(0) rotateZ(0deg)`;
})

//above code applies for every transition
//this code will fix that

container.addEventListener("mouseenter", e => {
    card.style.transition = 'all 0.1s ease';
    sneaker.style.transform = `translateZ(150px) rotateZ(-45deg)`;
    title.style.transform = `translateZ(150px)`;
    desc.style.transform = `translateZ(150px)`;
    button.style.transform = `translateZ(150px)`;
    purchase.style.transform = `translateZ(150px)`;
})