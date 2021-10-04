
/* CLASE PRODUCTOS CREADA */
class Producto{

    constructor(nombre, categoria, precio){
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = parseFloat(precio);
    }
    sumaIva(){
        this.precio = this.precio * 1.21;
    }
    
}

const tarta = new Producto("torta", "dulce", 1200);
const bocados = new Producto ("bocados", "salados", 200);


let productos = [];

/* CLASE TIENDA CREADA */

class Tienda{
    constructor(nombre, productos){
    this.nombre = nombre;
    this.productos = [] ;
}
agregarproducto(producto){
    this.productos.push(producto)
}
}

const tienda1 = new Tienda("TiendaCatering")
tienda1.agregarproducto(tarta);
tienda1.agregarproducto(bocados);

/*------------------------------------------------- SIMULADOR ------------------------------------------------------------------------- */


/* -----CALCULAR EL COSTO TOTAL DE LOS PRODUCTOS SELECCIONADOS (PRECIO POR CANTIDAD DEL PRODUCTO), Y MOSTRARLO AL USUARIO--------- */

/* SOLICITAR LA CANTIDAD DE PRODUCTOS A ELEGIR */

let cantidad_productos = Number(prompt("Ingrese la cantidad del producto a comprar: "))

console.log(cantidad_productos)

/* function elige_productos(cantidad_productos) {

    if (cantidad_productos != ""){
    
        cantidad_productos = Number(prompt("Ingrese la cantidad del producto a comprar: "))
         return cantidad_productos;

     }  
     console.log(cantidad_productos)

} */


/* SELECCIONAR EL TIPO DE PRODUCTO A ELEGIR */

/* A SU VEZ GUARDA EL COSTO SEGUN EL PRODUCTO*/

let tipo_productos = prompt("Ingrese el producto a comprar: ").toLowerCase;

function listado_productos(cantidad_productos){
for (let i= 1; cantidad_productos <5; i++) {
     tipo_productos = prompt("Ingrese el producto a comprar: ").toLowerCase
    return tipo_productos;
}
}


let costo_producto;

function procesa_productos(){
if (tipo_productos != ""){
switch(tipo_productos) {
    case "torta": 
        costo_producto = 1200;
        return costo_producto;
/*         break; */
    case "bocados": 
        costo_producto = 200;
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
         console.log(costo_total);
        return costo_total
        
    }

          /* LE MUESTRA EL COSTO TOTAL SEGUN LA CANTIDAD Y EL PRODUCTO ELEGIDO */

    function muestra(){
        alert("El costo total de tus productos es" + costo_total)
        console.log(costo_total)
    }
