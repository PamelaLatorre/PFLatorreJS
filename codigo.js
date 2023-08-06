//segundo desafio
console.table(cuadros, espejos, tapices, almohadones);

//función para filtrar los productos por nombre
function filtrarPorNombre(nombreBuscado, cuadros, espejos, tapices, almohadones){
    const filtrados = productos.filter((producto) => producto.nombre.toLowerCase().includes(nombreBuscado.toLowerCase()));
    // console.log(filtrados);
    return filtrados;
}

//datos de entrada por parte del usuario
let nombreUsuario = prompt("Ingresa el nombre del producto que estas buscando (0-salir)");

while (nombreUsuario != 0){
    
    //filtrar y mostrar los productos de cada array
    console.log("Cuadros:");
    console.table(filtrarPorNombre(nombreUsuario, cuadros));

    console.log("Espejos:");
    console.table(filtrarPorNombre(nombreUsuario, espejos));

    console.log("Tapices:");
    console.table(filtrarPorNombre(nombreUsuario, tapices));

    console.log("Almohadones:");
    console.table(filtrarPorNombre(nombreUsuario, almohadones));

    //pedimos nombre de producto nuevamente
    nombreUsuario = prompt("Ingresa el nombre del producto que estás buscando (0 para salir)");
}

console.log("¡Gracias por tu visita!");

//incorporamos cards de Bootstrap
let contenedorCuadro = document.getElementById("listaCuadros");

for (const producto of cuadros){
    contenedorCuadro.innerHTML += `
    <div class="card col-sm-2">
        <img src= "${producto.foto}">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">Precio $ ${producto.precio}</p>
            <button id=${producto.id} class="btn btn-primary">Comprar</button>
        </div>
    </div>
`}

let contenedorEspejo = document.getElementById("listaEspejos");

for (const producto of espejos){
    contenedorEspejo.innerHTML += `
    <div class="card col-sm-2">
        <img src= "${producto.foto}">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">Precio $ ${producto.precio}</p>
            <button id=${producto.id} class="btn btn-primary">Comprar</button>
        </div>
    </div>
`}

let contenedorTapiz = document.getElementById("listaTapices");

for (const producto of tapices){
    contenedorTapiz.innerHTML += `
    <div class="card col-sm-2">
        <img src= "${producto.foto}">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">Precio $ ${producto.precio}</p>
            <button id=${producto.id} class="btn btn-primary">Comprar</button>
        </div>
    </div>
`}

let contenedorAlmoha = document.getElementById("listaAlmoha");

for (const producto of almohadones){
    contenedorAlmoha.innerHTML += `
    <div class="card col-sm-2">
        <img src= "${producto.foto}">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">Precio $ ${producto.precio}</p>
            <button id=${producto.id} class="btn btn-primary">Comprar</button>
        </div>
    </div>
`}