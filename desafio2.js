/* PEDIR UN NUMERO MEDIANTE PROMPT */

let numero = Number(prompt("Ingrese numero:"));

if (numero==""){
    alert("no ha ingresado ningun numero")
}

else if (numero> 1000) {
alert("Su numero es mayor a 1000")
}
else{ alert("Su numero no es correcto")};

let texto = prompt("Ingrese texto requerido");

if (texto==""){
    console.log("no ha ingresado ningun texto")
}
else if (texto === "Hola"){
    console.log("El texto ", texto, " es correcto")
}
else{console.log("El texto ingresado no es 'Hola' ingrese el texto correcto")};

let numero2 = Number(prompt("Ingrese el segundo numero:"));

if(numero2==""){
   alert("No ha ingresado ningun numero")
}
else if ((numero2 >= 10) && (numero2 <=50))
{alert("El numero ingresado esta entre 10 y 50")}

else {alert("El numero ingresado no esta entre 10 y 50, ingrese nuevamente")};