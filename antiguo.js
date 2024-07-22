// Metodos y la manipulación del DOM

const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const pclass = document.querySelector(".parrafito");
const pid = document.querySelector("#pid");
const input = document.querySelector("input");

console.log(
    {
        h1,
        p,
        pclass,
        pid,
        input,
    }
)


h1.innerHTML = "Manipulación del DOOM ETERNAL";

input.placeholder = "DOMM MANIPULADO BY THE WAY";

const img = document.createElement("img");
img.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/2175/2175188.png");
console.log(img);

pid.appendChild(img);

//alert("Pepe");
 
pid.innerHTML = ("");
pid.appendChild(img);


// MANIPULACIÓN DEL DOM
Escribir HTML desde Javascript
1. innerHTML
Inserta codigo HTML en tu HTML

//Sintaxi:
elemento.innerHTML = 'Nuevo texto';
2. innerText
Inserta Texto plano en tu HTML

//Sintaxi:
elemento.innerText = 'Nuevo texto';
3. getAttribute()
Lee el valor de un atributo que tiene un elemento cuando indicamos su propiedad en parentesis

//Sintaxi:
elemento.getAttribute('class');
4. setAttribute()
Cambia el valor de un atributo que tiene un elemento cuando le indicamos su nuevo valor en parentesis

//Sintaxi:
elemento.setAttribute('class', 'nuevo-valor');
5. classList.add()
Para agregar un valor a una clase existente en un elemento

//Sintaxi:
elemento.classList.add('nuevo-valor1');
6. classList.remove()
Para eliminar el valor descrito en parentesis a la clase de un elemento

//Sintaxi:
elemento.classList.remove('nueva-valor1');
7. classList.toggle('titulo')
Si tiene un valor descrito entre parentesis se lo quita, o si no lo tiene se lo coloca:

//Sintaxi:
elemento.classList.add('valor');
8. classList.contains('titulo')
Devuelve true o false Si una propiedad tiene un valor descrito entre parentesis

//Sintaxi:
elemento.classList.contains('valor');
9. .value = 'valor'
Colocarle un valor a un elemento, usualmente colocado en inputs

//Sintaxi:
elemento.value = '12345';
10. .createElement()
Crea un elemento HTML ( < img >, < section >, < header >, < div >, etc )

//Sintaxi:
document.createElement(img);
11. .append()
Puede agregar al documento uno o varios elementos creado previamente al agregarlo entre parentesis

//Sintaxi:
elemento.append(img, img2);
12. .appendChild()
Puede agregar al documento solo un elemento creado previamente al agregarlo entre parentesis

//Sintaxi:
elemento.append(img);