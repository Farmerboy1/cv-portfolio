//const carouselSlide = document.querySelector(".section3_div2");
const carouselSlide = document.getElementById("section3_div2")
const carouselImages = document.querySelectorAll(".section3_div2_images");
const prev_btn = document.getElementById("arr_left")
const next_btn = document.getElementById("arr_right")


console.log(carouselSlide)


//counter
let counter = 1
const size = carouselImages[0].clientWidth
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'

//event listeners

next_btn.addEventListener('click', ()=>{
    if(counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out"
    counter++
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

prev_btn.addEventListener('click', ()=>{
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out"
    counter--
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

carouselSlide.addEventListener("transitionend", ()=>{
    if(carouselImages[counter].id === "last_clone"){
        carouselSlide.style.transition = "none"
        counter = carouselImages.length -2
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }

    if(carouselImages[counter].id === "first_clone"){
        carouselSlide.style.transition = "none"
        counter = carouselImages.length - counter 
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
})
  
// function showSlide(index) {
//     slides.forEach(function(slide) {
//         slide.style.transform = `translateX(-${index * 100}%)`;

        
//     });
//     //slides.push(slides[index])
// }



// arr_right.addEventListener("click", function() {
  
//     function slidePhoto(){
//       currentIndex = (currentIndex + 1) % slides.length;
//       showSlide(currentIndex);
//     };

//     slidePhoto()
// });



// arr_left.addEventListener("click", function() {
//     console.log("works")
  
//     function slidePhoto(){
//       currentIndex = (currentIndex - 1) % slides.length;
//       showSlide(currentIndex);
//     };

//     slidePhoto()
// });