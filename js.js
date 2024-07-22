

//EJERCICIOS DE JS

let name = "David";
let lastName = "Guzmán";
let user_name = "dogma";
let age = 25;
let mail = "moras.9492@gmail.com"
let adult = true;
let savedMoney = 1500;
let debtMoney = 1000000;

//  Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

// Nombre completo (nombre y apellido)
let name = "David";
let lastName = "Guzmán";
let fullName= name + " " + lastName;
console.log(fullName);



Dinero real (dinero ahorrado menos deudas)

let savedMoney = 15000;
let debtMoney = 1000000;
let fullMoney= savedMoney - debtMoney;
console.log(fullMoney);

// Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

function introduce(name, lastname, nickname) {
    const completeName = name + " " + lastname;
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

//  Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}


// Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

function tipoDeSuscripcion (suscripcion){

if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
    return;
}

if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    return;
}

if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    return;
}

if (tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    return;
}
console.warn("NO EXISTE TARADIN")
}
// Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏



const suscripciones = {
    "Free": "Solo puedes tomar los cursos gratis",
    "Basic": "Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Expert": "Puedes tomar casi todos los cursos de Platzi durante un año",
    "ExpertPlus": "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
};

function tipoDeSuscripcion(suscripcion){
if (suscripciones[suscripcion]) {
    console.log(suscripciones[suscripcion]);
}
console.warn("NO EXISTE TARADIN")
}

// Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

let i = 0;
while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}


let i = 10;
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}

// Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.


let respuestaCorrecta = false;

while (!respuestaCorrecta) {
    let respuesta = prompt("¿Cuánto es 2 + 2?");
    
    if (respuesta == "4") {
        alert("¡Felicitaciones! ¡Respuesta correcta!");
        respuestaCorrecta = true;
    } else {
        alert("Respuesta incorrecta. Intenta de nuevo.");
    }
}

// asi lo desaarrollo el juandc

while (respuestaCorrecta !=4) {
    let pregunta= prompt("Cuanto es 2 + 2")
    respuesta = pregunta;
}



//Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

function imprimirPrimerElemento(array) {
   
        console.log(array[0]);
    }

    imprimirPrimerElemento([1, 2, 3])




//  Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
    
function imprimirTodosLosElementos(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
imprimirTodosLosElementos([1, 2, 3])

// Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

const datos = {

    dato1: 1,
    dato2: 2,
    dato3: 3,
};



function imprimirDatos(datos) {
    const arr = Object.values(datos);
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

imprimirDatos(datos)








