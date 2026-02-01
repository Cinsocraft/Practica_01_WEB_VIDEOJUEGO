
// Personaje editor

let imgchange = document.getElementById("imgchangebody");

let picChange = document.getElementById("imgchangeEyes");

let threeEyebtn = document.getElementById("eyes_Three"); 
let twoEyebtn = document.getElementById("eyes_Two");
let oneEyebtn = document.getElementById("eyes_One");



oneEyebtn.onclick = function(){
    console.log("Has hecho click en Ojo uno");
    picChange.src = "media/imagen/Pasaporte_Ojo.png";
};
twoEyebtn.onclick = function() {
    console.log("Has hecho click en Ojo dos");
    picChange.src = "media/imagen/Pasaporte_Ojo2.png";
};
threeEyebtn.onclick = function(){
    console.log("Has hecho click en Ojo 3");
    picChange.src= "media/imagen/Pasaporte_Ojo3.png";
};

let skinYellowbtn = document.getElementById("skin_Three"); 
let skinRedbtn = document.getElementById("skin_Two");
let skinOraganbtn = document.getElementById("skin_One");

skinYellowbtn.onclick = function(){
    console.log("Has hecho click en Amarillo");
    imgchange.src = "media/imagen/Pasaporte_Cuerpo_Amarillo.png";
};
skinRedbtn.onclick = function() {
    imgchange.src = "media/imagen/Pasaporte_Cuerpo_Rojo.png";
};
skinOraganbtn.onclick = function(){
    console.log("Has hecho click en naranja");
    imgchange.src= "media/imagen/Pasaporte_Cuerpo_Naranja.png";
};