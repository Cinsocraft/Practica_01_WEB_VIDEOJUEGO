$(document).ready(function() {
  $('a').on('click', function(e) {
    e.preventDefault(); // Prevent immediate navigation
    
    const href = $(this).attr('href'); // Store the target URL
    
    // Fade out the entire page
    $('body').fadeOut(400, function() {
      // After fade out completes, redirect to the original page
      window.location.href = href;
    });
  });
});

/**
 *  
 * Funciones para el funcianamiento del componente slide-show 
 *
 * Este código permitira el funcionamiento del componenete slide-show mediante el uso de la flechas Flechas derecha  pasar a siguente slide, flecha izquierda vuelve al anterior
 * 
 * Al hacer click en los puntos se mostrara el slide asociado a ese punto
 * 
 * El slide funcionará de forma automatica, hasta que el usuario interactue con el.
 */

// Seleccionamos los elementos de las flechas

let slideIndex=1;

let autoSlide;

let arrDots=document.querySelectorAll(".dot");
console.log(arrDots);



showSlide(slideIndex); /* */


startAutoslide();

// Creamos un bucle para asociar a cada punto un evneto click y que se llame a la funcion currentDotSlide()

for(let j=0; j<arrDots.length; j++){
    arrDots[j].addEventListener("click", function(){
        console.log("Click en "+ j);
        currentDotSlide(j)
    });
}


/**
 * 
 * @param {number} dotIndex 
 * Esta funcion actualiza la variable slideIndex igualando su valor al indice del punto (dot) que le llegará como parámetro
 * 
 * Warning: El indice de los puntos empiezan en 0
 */
function currentDotSlide(dotIndex){
    slideIndex = dotIndex + 1;
    showSlide(slideIndex);
}


let nextSlideArrow = document.querySelector(".next");

let prevSlideArrow = document.querySelector(".prev");

nextSlideArrow.addEventListener("click", function(){

    stopAutoslide();
    
    nextPrevSlide(1);

    startAutoslide();
})

prevSlideArrow.addEventListener("click", function(){

    stopAutoslide();
    
    nextPrevSlide(-1);
    
    startAutoslide();
})


/**
 * 
 * @param {number} index 
 * 
 * Esta función actualiza la variable slideIndex y lo aumenta o disminuya de valor dependiendo del parámetro que le llegue en la llamada.
 * 
 */
function nextPrevSlide(index){
    slideIndex = slideIndex + index;
    showSlide(slideIndex);
}

/**
 * 
 * @param {number} slideNumber 
 * 
 * Esta función mostrará el slide correspondiente a la posición que le llegue por parámetro
 * 
 * También tendrá que calcular si nos pasamos por arriba o por abajo del índice
 * 
 */
function showSlide(slideNumber){

    let arrSlide = document.querySelectorAll(".mySlides");
    let maxSlide = arrSlide.length;

    // Si nos pasamos de ir para adelante

    if(slideNumber > maxSlide){
        slideIndex = 1;
    }

    else if(slideNumber <= 0 ){
        slideIndex = maxSlide;
    }
    console.log(slideIndex);
    for (let i=0; i<maxSlide; i++){
        arrSlide[i].style.display = "none";
        arrDots[i].className=arrDots[i].className.replace(".active", ""); /* */
    }

    // Mostramos eñ slide que  coincide con el índice
    arrSlide[slideIndex - 1].style.display = "block";
    arrDots[slideIndex -1].className += ".active";
}

// Automatizamos la llamada a la función nextPrevSlide() usando la función built-in serInterval().
// En la llamada a nextPrevSlide() le pasamos como parámetro el valor 1.

function startAutoslide(){

autoSlide = setInterval(function(){

    nextPrevSlide(1);

}, 3000);



}

function stopAutoslide(){

clearInterval(autoSlide);

}



// "media\imagen\Pasaporte_Cuerpo_Naranja.png";