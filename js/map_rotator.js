console.log("Script Cargado");

// Funciones para el funcionamento del componente map_rotator

// Este codigo permitira el funcionamento de los mapas como si fuera un SlideShow
// Al hacer click en las flechas, debe de cambiar el mapa de fondo y las descripciones.

//Inicializamos un Index
let slideIndex = 1;


let arrSlides = document.querySelectorAll(".Maps");
let arrDesc = document.querySelectorAll(".mapText")
let maxSlides = arrSlides.length;


//Inicializamos mostrando la primera imagen y las primeras descripciones
showSlide(slideIndex);

//Seleccionamos los elementos de las flechas.
let nextSlideArrow = document.querySelector(".map-next");
let prevSlideArrow = document.querySelector(".map-prev");

nextSlideArrow.addEventListener("click", function() {
    console.log ("clicked");
    nextPrevSlide(1);
});

prevSlideArrow.addEventListener("click", function() {
    console.log ("clicked");
    nextPrevSlide(-1);
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