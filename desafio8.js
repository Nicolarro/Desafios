
/* CLASE PRODUCTOS CREADA */

class Producto {
    constructor(nombre, categoria, precio) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = parseFloat(precio);
    }
    sumaIva() {
     this.precio = this.precio * 1.21;
    }
    }
    
    /* CREA LAS INSTANCIAS DEL OBJETO PRODUCTO  */
    
    const torta = new Producto("torta", "dulce", 1200);
    const bocados = new Producto("bocados", "salados", 200);
    const tarta = new Producto("tarta", "dulce", 500);
    
    
    /* CREA LISTA PRODUCTOS CON TODOS LOS PRODUCTOS DISPONIBLES */
    
    let productos = [];
    
    productos.push(torta);
    productos.push(tarta);
    productos.push(bocados);
    
    /*------------------------------------------------- SIMULADOR ------------------------------------------------------------------------- *//* -----CALCULAR EL COSTO TOTAL DE LOS PRODUCTOS SELECCIONADOS (PRECIO POR CANTIDAD DEL PRODUCTO), Y MOSTRARLO AL USUARIO--------- */
    

    /* USUARIO SELECCIONA LOS PRODUCTOS A COMPRAR  */
    let cantidad_productos;
    let listadoProducto = [];
    
    function listado_productos(cantidad_productos){
    for (let i = 1; i <= cantidad_productos; i++){

    let cantidad_productos = document.getElementById("cantidad").value

    let tipo_productos = document.getElementById("tipo").value
    
     const eleccion = productos.filter((item) => item.nombre == tipo_productos);
    
    /* A SU VEZ GUARDA LOS PRODUCTOS ELEGIDOS EN LISTADO PRODUCTOS*/
    listadoProducto.push(...eleccion);
    }
    
    console.log(listadoProducto)

    return listadoProducto;
    }
    
    const listado = listado_productos(cantidad_productos);

    console.log(listado)



    /* FUNCION QUE GUARDE LOS DATOS INGRESADOS POR EL USUARIO */
    
    const guardarDato = () =>{

    let cantidad_productos = document.getElementById("cantidad").value
    
    let tipo_productos = document.getElementById("tipo").value

    const boton = document.getElementById("save")

    console.log(cantidad_productos);
    console.log( tipo_productos);
    }

    document.getElementById("save").addEventListener("click", (e) => {
        e.preventDefault(), guardarDato()})
    

    console.log(guardarDato());


    /* ------INSERCION DE DOM AL HTML--------------------------------------------------- */

/*     /* SE CREA UN INNER HTML CON LOS PRODUCTOS SELECCIONADOS */
  for(productos of eleccion)
     let caja = document.createElement("div")

   caja.innerHTML = `<h3>Nombre: ${productos.nombre}</h3>
                    <h3>Cantidad Comprada: ${cantidad_productos} </h3> `
                    
    document.body.appendChild(caja);
                
    
    /* CALCULAR EL COSTO TOTAL DE LA COMPRA */
    
    let costo_total;
    function monto() {
    let suma = 0;
    listado.forEach((item) => {
    suma += item.precio;
    });
    return suma;
    }
    
    /* LE MUESTRA EL COSTO TOTAL SEGUN LA CANTIDAD Y EL PRODUCTO ELEGIDO */

    function muestraCosto() {
    alert("El costo total de tus productos es " + monto());
    console.log(monto());
    }
    
    muestraCosto();

     /* ------INSERCION DE DOM AL HTML--------------------------------------------------- */

       /* SE CREA UN INNER HTML CON MONTO TOTAL DE LA OPERACION */

    let contenedor = document.createElement("div")
    contenedor.innerHTML = `<h4> Costo Total: ${monto}</h4>`
    document.body.appendChild(contenedor)              
