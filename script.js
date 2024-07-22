const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const resultadoH2 = document.querySelector("#resultado");

btn.addEventListener("click", onClic);

function onClic() {
    const valor1 = parseFloat(input1.value);
    const valor2 = parseFloat(input2.value);
    
    //if (isNaN(valor1) || isNaN(valor2)) {
        //console.log("Por favor, ingresa números válidos.");
        //resultadoH2.textContent = "Por favor, ingresa números válidos.";
    //} else 
    {
        const resultado = valor1 + valor2;
        //alert(resultado);
        console.log(resultado);
        resultadoH2.textContent = "Resultado: " + resultado;
    }
}



