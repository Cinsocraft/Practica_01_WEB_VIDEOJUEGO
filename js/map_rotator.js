console.log("Script Cargado");

// Funciones para el funcionamento del componente slideShow

// Este codigo permitira el funcionamento del componente slideShow mediante el uso de las frlechas. Flcha derecha pasar al siguiente slide, fleda izquierda slide anterior-
// Al hacer click en los puntitos se mostrar el slide asociado a ese punto
// El slide funcionara de forma automatica, hasta que el usuario interactue con el.

//Inicializamos un Index
let slideIndex = 1;


let arrSlides = document.querySelectorAll(".Maps");
let arrDesc = document.querySelectorAll(".mapText")
let maxSlides = arrSlides.length;

showSlide(slideIndex);

//Iniciamos el funcionamiento automatico
// startAutoSlide();


//seleccionamos todos los puntos y a cada punto le asociamos un evento de click

//creamos el bucle para asociar a cada punto un evento click y que se llama a la funcion currentDotSlide()



/**
 * 
 * @param {number} dotIndex 
 */
function currentDotSlide(dotIndex) {
    slideIndex = dotIndex + 1;
    showSlide(slideIndex);
}

//Seleccionamos los elementos de las flechas-

let nextSlideArrow = document.querySelector(".map-next");
let prevSlideArrow = document.querySelector(".map-prev");

nextSlideArrow.addEventListener("click", function() {
    // stopAutoSlide();
    console.log ("clicked");
    nextPrevSlide(1);
    // startAutoSlide();
});

prevSlideArrow.addEventListener("click", function() {
    console.log ("clicked");
    // stopAutoSlide();
    nextPrevSlide(-1);
    // startAutoSlide();
});



/**
 * 
 * @param {number} Index 
 * 
 * Esta función actualiza la variable slideIndex y lo aumenta o disminuye de valor dependiendo del parametro que le llegue en la llamada
 * 
 */
function nextPrevSlide (Index) {
    slideIndex = slideIndex + Index;
    showSlide(slideIndex);
}

    

/**
 * 
 * @param {number} slideNumber
 * 
 * Esta función mostrara el slide correspondiente a la posicion que le llegue por parametro.
 *  
 */
function showSlide (slideNumber) {

    //comprabnado de que no estemos fuera de array
    if (slideNumber > maxSlides) {
        slideIndex = 1;
    }
    else if (slideNumber <= 0) {
        slideIndex = maxSlides;
    }
    console.log(slideIndex)

    for (let i = 0; i < maxSlides; i++) {
        arrSlides[i].style.display = "none";
        arrDesc[i].style.display = "none";
    }

    arrSlides[slideIndex-1].style.display = "block";
    arrDesc[slideIndex-1].style.display = "block";
}

//Automatizamos la llamada de la funcion NextPrevSlide, usando la funcion setInterval
//Inicia el funcionamiento automatico del slideshow
function startAutoSlide(){

    autoSlide = setInterval(function(){
        nextPrevSlide(1);
    }, 3000);

};

//detiene el funcionamiento automatico del slideshow

function stopAutoSlide(){
    clearInterval(autoSlide)
}