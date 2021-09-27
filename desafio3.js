
/* Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”. */

    let valor_ingresado;
    let mensaje = alert ("Ingrese sus 3 productos a comprar: ")
for (let i = 1; i < 4; i++){
    if (valor_ingresado !="ESC"){
    valor_ingresado = prompt("Ingrese el producto a comprar ")
    alert("Su producto comprado es: " + valor_ingresado)
    console.log(valor_ingresado)}
}


