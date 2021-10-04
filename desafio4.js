

/* -----CALCULAR EL COSTO TOTAL DE LOS PRODUCTOS SELECCIONADOS (PRECIO POR CANTIDAD DEL PRODUCTO), Y MOSTRARLO AL USUARIO--------- */

/* SOLICITAR LA CANTIDAD DE PRODUCTOS A ELEGIR */

let cantidad_productos = Number(prompt("Ingrese la cantidad del producto a comprar: "))

console.log(cantidad_productos)



/* SELECCIONAR EL TIPO DE PRODUCTO A ELEGIR */

/* A SU VEZ GUARDA EL COSTO SEGUN EL PRODUCTO*/

let tipo_productos = ""

function listado_productos(cantidad_productos){
for (let i= 1; cantidad_productos <5; i++) {
    tipo_productos = prompt("Ingrese el producto a comprar: ").toLowerCase
    return tipo_productos;
}
}
console.log(listado_productos(cantidad_productos))


/* ASIGNA UN COSTO SEGUN EL TIPO DE PRODUCTO ELEGIDO */

let costo_producto = ""

function procesa_productos(tipo_productos){
if (tipo_productos != ""){
switch(tipo_productos) {
    case "torta": 
        costo_producto = 1200;
        return costo_producto;

    case "bocados": 
        costo_producto = 200;
        return costo_producto;

    case "tarta": 
        costo_producto= 150;
        return costo_producto;

    default:
        alert("El producto indicado no esta a la venta");
        console.log (costo_producto)
    }

    alert("El costo de" + tipo_productos + "es" + costo_producto);
    console.log (procesa_productos(tipo_productos));
}
}
    /* CALCULAR EL COSTO TOTAL DE LA COMPRA */

    let costo_total = ""

    function monto (costo_producto,tipo_productos) {
         costo_total = (costo_producto * tipo_productos)
         console.log(costo_total);
        return costo_total}
        
    console.log(monto(costo_producto,tipo_productos))



          /* LE MUESTRA EL COSTO TOTAL SEGUN LA CANTIDAD Y EL PRODUCTO ELEGIDO */

    function muestra(){
        alert("El costo total de tus productos es" + costo_total)
        console.log(costo_total)
    }

