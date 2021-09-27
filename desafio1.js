
/* SOLICITA DATOS PERSONALES Y CANTIDAD Y COSTO DEL PRODUCTO, PARA DEVOLVER EL MONTO A PAGAR  */


let nombre = prompt("Ingrese su nombre");
let apellido = prompt ("Ingrese su apellido");
let producto1= 50;
let producto2= 100;
let cantidad_producto= Number(prompt("Ingrese la cantidad del producto a comprar:"));


let costo_producto= Number(prompt("Ingrese el costo del producto a comprar:"));
let precio_final = (cantidad_producto * costo_producto);


console.log("Bienvenido"," ", nombre, " ", apellido, " ", "el precio por sus productos es de", " ","$",precio_final)
