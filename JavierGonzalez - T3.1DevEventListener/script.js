const botonRojo = document.getElementById("botonRojo");
botonRojo.addEventListener("click", function() {
    document.getElementById("colorBox").style.backgroundColor = "#aa0404";
    document.getElementById("colorText").textContent = "El evento es el 3.1 addEventListener Simple";
});

const botonVerde = document.getElementById("botonVerde");
function cambiarAVerde() {
    document.getElementById("colorBox").style.backgroundColor = "#0faa04";
    document.getElementById("colorText").textContent = "El evento es el 3.2 addEventListener con Función Dentro";
}
botonVerde.addEventListener("click", cambiarAVerde);

const botonAzul = document.getElementById("botonAzul");
botonAzul.addEventListener("click", () => {
    document.getElementById("colorBox").style.backgroundColor = "#0476aa";
    document.getElementById("colorText").textContent = "El evento es el 3.3 addEventListener con Función Arrow";
});

const botonReset = document.getElementById("botonReset");
botonReset.addEventListener("click", () => {
    document.getElementById("colorBox").style.backgroundColor = "white";
    document.getElementById("colorText").textContent = "Click en un botón para cambiar el color!";
});


function cambiarColorSimple() {
    document.getElementById("colorBox").style.backgroundColor = "#FFDDC1";
    document.getElementById("colorText").textContent = "3.1. addEventListener Simple";
}


const botonSimple = document.getElementById("addEventListenerSimple");
botonSimple.addEventListener("click", cambiarColorSimple);



document.getElementById("addEventListenerFuncionDentro").addEventListener("click", function cambiarColorFuncionDentro() {
    document.getElementById("colorBox").style.backgroundColor = "#C1FFD7"; 
    document.getElementById("colorText").textContent = "3.2. addEventListener con Función Dentro";
});


const botonFuncionArrow = document.getElementById("addEventListenerFuncionArrow");
const mostrarMensajeConArrow = (e) => {
    document.getElementById("colorBox").style.backgroundColor = "#D1C1FF"; 
    document.getElementById("colorText").textContent = "3.3. addEventListener con Función Arrow";
};
botonFuncionArrow.addEventListener("click", mostrarMensajeConArrow);


document.getElementById("addEventListenerArrowAnonima").addEventListener("click", () => {
    document.getElementById("colorBox").style.backgroundColor = "#FFC1C1"; 
    document.getElementById("colorText").textContent = "3.4. addEventListener con Función Arrow Anónima";
});
