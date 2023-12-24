const productos = [
  {
    id: "mañanita",
    titulo: "YERBA MAÑANITAS",
    imagen: "../img/yerba1.jpg",
    categoria:{
      nombre: "mañanitas",
      id: "yerbas"
    },
    precio: 870
  },
  {
    id: "la-tranquera",
    titulo: "YERBA LA TRANQUERA",
    imagen: "../img/yerba2.jpg",
    categoria:{
      nombre: "la-ytanquera",
      id: "yerbas"
    },
    precio: 1090
  },
  {
    id: "nobleza-gaucha",
    titulo: "YERBA NOBLEZA GAUCHA",
    imagen: "../img/yerba3.jpg",
    categoria:{
      nombre: "nobleza-gaucha",
      id: "yerbas",
    },
    precio: 880
  },
  {
    id: "picada-vieja",
    titulo: "YERBA PICADA VIEJA",
    imagen: "../img/yerba4.jpg",
    categoria:{
      nombre: "picada-vieja",
      id: "yerbas",
    },
    precio: 950
  },
  {
    id: "playadito",
    titulo: "YERBA PLAYADITO",
    imagen: "../img/yerba5.jpg",
    categoria:{
      nombre: "playadito",
      id: "yerbas"
    },
    precio: 1120
  },
  {
    id: "rosamonte",
    titulo: "YERBA ROSAMONTE BRILLOSA",
    imagen: "../img/yerba6.jpg",
    categoria:{
      nombre: "rosamonte-brillosa",
      id: "yerbas"
    },
    precio: 1090
  },
  {
    id: "sol-y-lluiva",
    titulo: "YERBAS SOL Y LLUVIA",
    imagen: "../img/yerba7.jpg",
    categoria:{
      nombre: "sol-y-lluvia",
      id: "yerbas"
    },
    precio: 990
  },
  {
    id: "taragui-azul",
    titulo: "YERBA TARAGUI SIN PALO",
    imagen: "../img/yerba8.jpg",
    categoria:{
      nombre: "taragui-azul",
      id: "yerbas"
    },
    precio: 1100
  },
  {
    id: "mate-cuero-trabajado",
    titulo: "MATE CAMIONERO CON CUERO TRABAJADO",
    imagen:"../img/mate5.jpg",
    categoria:{
      nombre: "mate-cam-cs",
      id: "mates"
    },
    precio: 15250
  },
  {
    id: "mate-acero-inox",
    titulo: "MATE ACERO INOXIDABLE",
    imagen:"../img/mate1.png",
    categoria:{
      nombre: "mat-ac-inox",
      id: "mates"
    },
    precio: 1250
  },
  {
    id: "mate-camionero",
    titulo: "MATE CAMIONERO",
    imagen:"../img/mate2.jpg",
    categoria:{
      nombre: "mat-cam",
      id: "mates"
    },
    precio: 7000
  },
  {
    id: "mate-camionero-algarrobo",
    titulo: "MATE CAMIONERO DE ALGARROBO",
    imagen:"../img/mate3.jpg",
    categoria:{
      nombre: "cam-alga",
      id: "mates"
    },
    precio: 12000
  },
  {
    id: "mate-camionero-chico",
    titulo: "MATE CAMIONERO CHICO",
    imagen:"../img/mate4.jpg",
    categoria:{
      nombre: "cam-chi",
      id: "mates"
    },
    precio: 9000
  },
  {
    id: "mate-torpedo",
    titulo: "MATE TORPEDO",
    imagen:"../img/mate6.jpg",
    categoria:{
      nombre: "torpedo",
      id: "mates"
    },
    precio: 1000
  },
  {
    id: "mate-imperial-chico",
    titulo: "MATE IMPERIAL CHICO",
    imagen:"../img/mate7.jpg",
    categoria:{
      nombre: "imperial-chico",
      id: "mates"
    },
    precio: 6500
  },
  {
    id: "mate-torpedo-cuero-trabajado",
    titulo: "MATE TORPEDO CUERO TRABAJADO",
    imagen:"../img/mate8.jpg",
    categoria:{
      nombre: "torp-cue-trab",
      id: "mates"
    },
    precio: 16900
  },
  {
    id: "mate-argentina",
    titulo: "MATE TORPEDO ARGENTINA ",
    imagen:"../img/mate9.jpg",
    categoria:{
      nombre: "torp-arg",
      id: "mates"
    },
    precio: 9500
  },
  {
    id: "mate-torpedo-imperial",
    titulo: 'MATE TORPEDO IMPERIAL',
    imagen:"../img/mate10.jpg",
    categoria:{
      nombre: "torp-imp",
      id: "mates"
    },
    precio: 11590
  },
  {
    id: "matera-cuero",
    titulo: "MATERA DE CUERO MARRON",
    imagen: "../img/materacuero1.jpg",
    categoria:{
      nombre: "matera-marrron",
      id: "acces"
    },
    precio: 12480
  },
  {
    id: "matera-cuero-2",
    titulo: "MATERA DE CUERO NEGRA SIMPLE",
    imagen: "../img/materacuero2.jpg",
    categoria:{
      nombre: "matera-negra-simple",
      id: "acces"
    },
    precio: 8500
  },
  {
    id: "matera-madera",
    titulo: "MATERA DE MADERA ",
    imagen: "../img/materacuero3.jpg",
    categoria:{
      nombre: "matera-madera",
      id: "acces"
    },
    precio: 8950
  },
  {
    id: "matera-auto",
    titulo: "PORTA MATE PARA AUTO",
    imagen: "../img/materacuero4.jpg",
    categoria:{
      nombre: "matera-auto",
      id: "acces"
    },
    precio: 7250
  },
  {
    id: "yerbero-bombilla",
    titulo: "YERBERO Y PORTA BOMBILLA",
    imagen: "../img/yerberoBombilla.jpg",
    categoria:{
      nombre: "yer-bomb",
      id: "acces"
    },
    precio: 4550
  },

];

const contenedorProducto = document.querySelector("#productos");
const botonesCategorias = document.querySelectorAll(".categoria-boton");
let agregarCarrito = document.querySelectorAll(".agregar_carrito");
const numero = document.querySelector("#cantidadEnCarrito");




function pintarProductos (productosFiltrados){

  contenedorProducto.innerHTML = "";

  productosFiltrados.forEach(producto => { 
    
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img src="${producto.imagen}" class="imagen_producto" alt="${producto.titulo}">
      <div class="producto_body">
        <h3 class="titulo_producto">${producto.titulo}</h3>
        <p class="precio_producto">$${producto.precio}</p>
        <button class="agregar_carrito" id="${producto.id}"> Agregar al carrito </button>
      </div>
    `;

    contenedorProducto.append(div);

  });

  llamarBotones();
};

pintarProductos(productos);




botonesCategorias.forEach(boton => {

  boton.addEventListener("click", (e)=> {

    if(e.target.id != "todos"){

      const productosCategorias = productos.filter(producto => producto.categoria.id === e.target.id);
      pintarProductos(productosCategorias);

    }else{

      pintarProductos(productos);

    };

  });

});




function llamarBotones(){
  
  agregarCarrito = document.querySelectorAll(".agregar_carrito");
  
  agregarCarrito.forEach(boton => {
    boton.addEventListener("click", agregarAlCarrito);
    
  });

};

llamarBotones();







let productosEnCarrito;
const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));

if (productosEnCarritoLS) {

  productosEnCarrito = productosEnCarritoLS;
  actualizarNumeroCarrito();

}else{

  productosEnCarrito = [];

};



function agregarAlCarrito (e){

  const idBoton = e.target.id;
  const productoAgregado = productos.find(producto => producto.id === idBoton);

  if(productosEnCarrito.find(producto => producto.id === idBoton)){ 

    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito[index].cantidad++;

  }else{
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);

  };
  
  actualizarNumeroCarrito();
  
  const carritoJson = JSON.stringify(productosEnCarrito);
  localStorage.setItem("productos-en-carrito",carritoJson);
  
};




function actualizarNumeroCarrito (){
  let cantidadEnCarrito = productosEnCarrito.reduce ((acc,producto)=> acc + producto.cantidad,0);
  numero.innerText = cantidadEnCarrito;
};





function toggleDarkMode() {

  const body = document.querySelector("body");

  body.classList.toggle("dark");
}


window.addEventListener("DOMContentLoaded", toggleDarkModeAtSunset);

function toggleDarkModeAtSunset() {
  // Obtener la hora actual
  const now = new Date();

  // Comprobar si es de noche
  if (now.getHours() >= 19) {
    // Activar el modo oscuro
    toggleDarkMode();
  }
}
