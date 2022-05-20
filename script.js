// Ecommerce
// array de objeto de productos con precio

// ingresar que productos quiero agregar


let carrito = [];

let productos = [
        {id: 1, producto: "Lampara", precio: 2500},
        {id: 2, producto: "Mesa", precio: 1000},
        {id: 3, producto: "Cama", precio: 15000},
        {id: 4, producto: "Silla", precio: 4000},
        {id: 5, producto: "Cortina", precio: 6000},
        {id: 6, producto: "Televisor", precio: 40000}
    ];

// Mostramos todos los productos
function renderizarProductos() {
    console.log("------Mira nuestro catalogo------");
    productos.forEach((info) => {
        const producto = info.producto;
        const precio = info.precio;
        console.log(`${producto} tiene un costo de $${precio}`);
    });
}

renderizarProductos(); // Mostramos los productos

// Mostramos el carrito
function renderCarrito () {
    console.log("------Tu Carrito------");
    carrito.forEach((item) => {
        const producto = item.producto;
        const precio = item.precio;
        console.log(`Producto agregado al carrito: ${producto} y tiene un costo: ${precio}`);
    })

}

function productoCarrito(valor) {
    // agregamos el producto a nuestro carrito
    carrito.push(productos[valor]);
    // Actualizamos el carrito 
    renderCarrito();
}

function cacularTotal () {
        let acumulador = 0, aux;
        carrito.forEach((item) => {
            aux = item.precio;
            acumulador = acumulador + aux;
            console.log(acumulador);
        })
    
}
cacularTotal(); // Calculamos el carrito

// Programa

/*------ Agregamos los productos al carrito--------*/
productoCarrito(1);
productoCarrito(3);


