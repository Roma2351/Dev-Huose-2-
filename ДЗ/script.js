let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    for (let slide of slides) {
        slide.style.display = "none";
    }   
    slides[slideIndex - 1].style.display = "block"; 
}



let inputComent = document.querySelector(".inp_coment")
let addButton = document.querySelector(".button_add")
let buttonAdd = document.querySelector(".ul_coment")
let comentWindow = document.querySelector(".coment_window")

addButton.addEventListener('click',(e)=>{
    if(inputComent.value === '') return;
    creatDeleteElements(inputComent.value);
    inputComent.value = ''
    
})

function creatDeleteElements(value){
    const li = document.createElement('li');
    li.className ='li';
    li.textContent = value

    const but = document.createElement('button');
    but.className ='but';
    but.textContent ='Удалить коментарий'
    li.append(but)

    but.addEventListener('click',(e) =>{
        buttonAdd.removeChild(li);
    })
    li.addEventListener('click',(e)=>{
        alert(comentWindow.value);
        comentWindow.value =''
       
    })
    buttonAdd.append(li)
    
}