let productos= [
    {
        "id": "libro1",
        "titulo": "Coaching CoActivo",
        "imagen": "../imagenes/coactivo.jpg",
        "precio": 3000
    },
    
    {
        "id": "libro2",
        "titulo": "Coaching Equipos en la Practica",
        "imagen": "../imagenes/equipos.jpg",
        "precio": 5800
    },
    {
        "id": "libro3",
        "titulo": "Coaching para Transformacion Personal",
        "imagen": "../imagenes/transformacion.jpg",
        "precio": 8100
    },
    {
        "id": "libro4",
        "titulo": "Neurociencia aplicada al Coaching",
        "imagen": "../imagenes/neurociencia.jpg",
        "precio": 10000
    },
    {
        "id": "libro5",
        "titulo": "Coaching John Withmore",
        "imagen": "../imagenes/whitmore.jpg",
        "precio": 16000
    },
    {
        "id": "libro6",
        "titulo": "Estrategias Coaching Ejecutivo",
        "imagen": "../imagenes/bicondoa.jpg",
        "precio": 3800
    },
    {
        "id": "libro7",
        "titulo": "Libro Coaching para Lideres",
        "imagen": "../imagenes/evans.jpg",
        "precio": 3800
    },
    {
        "id": "libro8",
        "titulo": "Un Mundo de Posibilidades",
        "imagen": "../imagenes/perel.jpg",
        "precio": 4500
    }
];

 
///ELEMENTOS DOM
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


cargarProductos(productos);

///FUNCIONES

function cargarProductos(productosElegidos) {
  ///contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <div class="gray border capacitacion">
            <img class="producto-imagen" src="${producto.imagen}">
            <div class="producto-detalles">
            <div class="card-body col-lg-3 col-md-2 col-sm-1 id-libro"> 
                <h3 class="card-title text-center fs-6 fw-bold lh-md nombre-libro producto-titulo">${producto.titulo}</h3>
                <p class="precio-libro text-center producto-precio">$${producto.precio}</p>
                <button class="boton producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    }) 
    actualizarBotonesAgregar();

} 

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}


let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;

    }
    
    else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);

    }

    actualizarNumerito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    if (productosEnCarrito!=null) {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
    }
    else {
        productosEnCarrito=[];
        numerito= 0;
    }
}