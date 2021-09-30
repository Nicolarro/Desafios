

/* -----CALCULAR EL COSTO TOTAL DE LOS PRODUCTOS SELECCIONADOS (PRECIO POR CANTIDAD DEL PRODUCTO), Y MOSTRARLO AL USUARIO--------- */

/* SOLICITAR LA CANTIDAD DE PRODUCTOS A ELEGIR */

let cantidad_productos = Number(prompt("Ingrese la cantidad del producto a comprar: "))

function elige_productos() {
/*     cantidad_productos = Number (prompt("Ingrese la cantidad de productos a comprar: ")) */
    for (let i= 1; cantidad_productos <5; i++) {
        cantidad_productos = Number(prompt("Ingrese la cantidad del producto a comprar: "));
    }
     if (cantidad_productos != ""){
         return cantidad_productos;
         console.log(productos)
     }  
}


/* SELECCIONAR EL TIPO DE PRODUCTO A ELEGIR */

/* A SU VEZ GUARDA EL COSTO SEGUN EL PRODUCTO*/

let tipo_productos = prompt("Ingrese el producto a comprar: ").toLowerCase;
let costo_producto;

function procesa_productos(){
if (tipo_productos != ""){
switch(tipo_productos) {
    case "torta": 
        costo_producto = 250;
        return costo_producto;
/*         break; */
    case "bocados": 
        costo_producto = 100;
        return costo_producto;
/*         break; */
    case "tarta": 
        costo_producto= 150;
        return costo_producto;
/*         break; */
    default:
        alert("El producto indicado no esta a la venta");
        console.log (costo_producto)
/*         break; */
    }

    alert("El costo de" + tipo_productos + "es" + costo_producto);
    console.log (costo_producto);
    console.log (tipo_productos);
}
}
    /* CALCULAR EL COSTO TOTAL DE LA COMPRA */

    let costo_total;

    function monto () {
         costo_total = (costo_producto * tipo_productos)
        return costo_total
        
    console.log(costo_total);
    }

          /* LE MUESTRA EL COSTO TOTAL SEGUN LA CANTIDAD Y EL PRODUCTO ELEGIDO */

    function muestra(){
        alert("El costo total de tus productos es" + costo_total)
        console.log(costo_total)
    }

