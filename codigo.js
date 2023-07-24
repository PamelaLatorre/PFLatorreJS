//segundo desafio
console.table(productos);

//función para filtrar los productos por nombre
function filtrarPorNombre(nombreBuscado){
    const filtrados = productos.filter((producto) => producto.nombre.toLowerCase().includes(nombreBuscado.toLowerCase()));
    // console.log(filtrados);
    return filtrados;
}

//datos de entrada por parte del usuario
let nombreUsuario = prompt("Ingresa el nombre del producto que estas buscando (0-salir)");

while (nombreUsuario != 0){
    const prodsFiltrados = filtrarPorNombre(nombreUsuario);
    if (prodsFiltrados.length === 0) {
        alert("No se encontraron productos con ese nombre ❌");
    } else {
    console.table(prodsFiltrados);
    }
    //se vuelve a preguntar
    nombreUsuario = prompt("Ingresa el nombre del producto que estas buscando (0-salir)");
}


//primer desafio entregado
let compraTotal = 0;

let producto = prompt("1- Cuadro infantil ... $1600\n2- Cuadro frase ... $1800\n3- Cuadro boho ... $2100\n4- Cuadro inicial ... $1900\n5- Cuadro estampado ... $2500\n6- Espejo ... $3100\n7- Espejo infantil ... $3400\n8- Tapiz letra ... $1900\n9- Tapiz animal ... $2100\n10- Almohadon estampado grande ... $3300\n11- Almohadon grande ... $2900\n12- Almohadon estampado chico ... $2800\n0- Para finalizar");

while(producto != 0){
    switch(producto){
        case "1" : 
            alert("Agregaste Cuadro infantil ... $1600 a tu carrito 🛒");
            sumarCompraTotal (1600);
        case "2" :
            alert("Agregaste Cuadro frase ... $1800 a tu carrito 🛒");
            sumarCompraTotal (1800);
            break;
        case "3" :
            alert("Agregaste Cuadro boho ... $2100 a tu carrito 🛒");
            sumarCompraTotal (2100);
            break; 
        case "4" :
            alert("Agregaste Cuadro inicial ... $1900 a tu carrito 🛒");
            sumarCompraTotal (1900);
            break;
        case "5" :
            alert("Agregaste Cuadro estampado ... $2500 a tu carrito 🛒");
            sumarCompraTotal (2500);
            break;
        case "6" :
            alert("Agregaste Espejo ... $3100 a tu carrito 🛒");
            sumarCompraTotal (3100);
            break;
        case "7" :
            alert("Agregaste Espejo infantil ... $3400 a tu carrito 🛒");
            sumarCompraTotal (3400);
            break;
        case "8" :
            alert("Agregaste Tapiz letra ... $1900 a tu carrito 🛒");
            sumarCompraTotal (1900);
            break;
        case "9" :
            alert("Agregaste Tapiz animal ... $2100 a tu carrito 🛒");
            sumarCompraTotal (2100);
            break;
        case "10" :
            alert("Agregaste Almohadon estampado grande ... $3300 a tu carrito 🛒");
            sumarCompraTotal (3300);
            break;
        case "11" :
            alert("Agregaste Almohadon grande ... $2900 a tu carrito 🛒");
            sumarCompraTotal (2900);
            break;
        case "12" :
            alert("Agregaste Almohadon estampado chico... $2800 a tu carrito 🛒");
            sumarCompraTotal (2800);
            break;
        default :
            alert("Código de producto incorrecto ❌");
            break;
    }
    
    //se vuelve a preguntar
    producto = prompt("1- Cuadro infantil ... $1600\n2- Cuadro frase ... $1800\n3- Cuadro boho ... $2100\n4- Cuadro inicial ... $1900\n5- Cuadro estampado ... $2500\n6- Espejo ... $3100\n7- Espejo infantil ... $3400\n8- Tapiz letra ... $1900\n9- Tapiz animal ... $2100\n10- Almohadon estampado grande ... $3300\n11- Almohadon grande ... $2900\n12- Almohadon estampado chico ... $2800\n0- Para finalizar");
}

alert ("El monto total de tu compra es $"+ compraTotal)

//funcion para sumar el total de la compra realizada y la tira por consola
function sumarCompraTotal (precioProducto){
    compraTotal = compraTotal + precioProducto;
    console.log("La compra suma por el momento $" +compraTotal);
}

//incorporamos cards de Bootstrap
let articuloCartas = document.getElementById("cartas");

for (const producto of productos){
    articuloCartas.innerHTML += `
    <div class="card" style="width: 18rem;">
        <img src= "${producto.foto}">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">Precio $ ${producto.precio}</p>
            <a href="#" class="btn btn-primary">Comprar</a>
        </div>
    </div>
`}