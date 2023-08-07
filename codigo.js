//función para filtrar los productos por nombre
// function filtrarPorNombre(nombreBuscado){
//     const filtrados = producto.filter((producto) => producto.nombre.toLowerCase().includes(nombreBuscado.toLowerCase()));
//     return filtrados;
// }

function filtrarPorNombre(nombreBuscado, categoria) {
    let productos;
    
    switch (categoria) {
        case 'cuadros':
            productos = cuadros;
            break;
        case 'almohadones':
            productos = almohadones;
            break;
        case 'espejos':
            productos = espejos;
            break;
        case 'tapices':
            productos = tapices;
            break;
        default:
            throw new Error('Categoría no válida');
    }
    
    const filtrados = productos.filter((producto) => producto.nombre.toLowerCase().includes(nombreBuscado.toLowerCase()));
    return filtrados;
}

const nombreProductoInput = document.getElementById('nombreProducto');
const buscarBtn = document.getElementById('busquedaButton');
const salirBtn = document.getElementById('salida');
const resultadoDiv = document.getElementById('resultado');

buscarBtn.addEventListener('click', () => {
    const nombreBuscado = nombreProductoInput.value;
    if (filtrarPorNombre() !== '') {
        const prodsFiltrados = filtrarPorNombre(nombreBuscado);
        if (prodsFiltrados.length === 0) {
            resultadoDiv.innerHTML = "No se encontraron productos con ese nombre ❌";
        } else {
            let tableHtml = '<table><tr><th>Nombre</th><th>Precio</th></tr>';
            prodsFiltrados.forEach((producto) => {
                tableHtml += `<tr><td>${producto.nombre}</td><td>${producto.precio}</td></tr>`;
            });
            tableHtml += '</table>';
            resultadoDiv.innerHTML = tableHtml;
        }
    }
});

salirBtn.addEventListener('click', () => {
    resultadoDiv.innerHTML = '';
    nombreProductoInput.value = '';
});

//incorporamos cards de Bootstrap
let carro = JSON.parse(localStorage.getItem('carro')) || [];

let tablaBody = document.getElementById("tablaBody");
let botones = document.getElementsByClassName("compra");

function renderizarProductos(listaCuadros, listaEspejos, listaTapices, listaAlmoha){

//lista de cuadros
let contenedorCuadro = document.getElementById("listaCuadros");

    for (const producto of cuadros){
        contenedorCuadro.innerHTML += `
        <div class="card col-sm-2">
            <img src= "${producto.foto}">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Precio $ ${producto.precio}</p>
                <button id=${producto.id} class="btn btn-primary compra">Comprar</button>
            </div>
        </div>
    `}

//lista de espejos    
let contenedorEspejo = document.getElementById("listaEspejos");

    for (const producto of espejos){
        contenedorEspejo.innerHTML += `
        <div class="card col-sm-2">
            <img src= "${producto.foto}">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Precio $ ${producto.precio}</p>
                <button id=${producto.id} class="btn btn-primary compra">Comprar</button>
            </div>
        </div>
    `}

//lista de tapices    
let contenedorTapiz = document.getElementById("listaTapices");

    for (const producto of tapices){
        contenedorTapiz.innerHTML += `
        <div class="card col-sm-2">
            <img src= "${producto.foto}">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Precio $ ${producto.precio}</p>
                <button id=${producto.id} class="btn btn-primary compra">Comprar</button>
            </div>
        </div>
    `}

//lista de almohadones
let contenedorAlmoha = document.getElementById("listaAlmoha");

    for (const producto of almohadones){
        contenedorAlmoha.innerHTML += `
        <div class="card col-sm-2">
            <img src= "${producto.foto}">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Precio $ ${producto.precio}</p>
                <button id=${producto.id} class="btn btn-primary compra">Comprar</button>
            </div>
        </div>
    `}

//eventos en cuadros, espejos, tapices y almohadones
for (const boton of botones) {
    boton.addEventListener("click", () => {
        console.log("Hiciste click en el botón id: " + boton.id);
        
        const prodACarritoCuadros = cuadros.find((producto) => producto.id == boton.id);
        const prodACarritoEspejos = espejos.find((producto) => producto.id == boton.id);
        const prodACarritoTapices = tapices.find((producto) => producto.id == boton.id);
        const prodACarritoAlmohadones = almohadones.find((producto) => producto.id == boton.id);
        
        if (prodACarritoCuadros) {
            console.log(prodACarritoCuadros);
            agregarACarrito(prodACarritoCuadros);
        } else if (prodACarritoEspejos) {
            console.log(prodACarritoEspejos);
            agregarACarrito(prodACarritoEspejos);
        } else if (prodACarritoTapices) {
            console.log(prodACarritoTapices);
            agregarACarrito(prodACarritoTapices);
        } else if (prodACarritoAlmohadones) {
            console.log(prodACarritoAlmohadones);
            agregarACarrito(prodACarritoAlmohadones);
        }
    });
}
}

renderizarProductos(cuadros, espejos, tapices, almohadones);

//push al carrito de todas las listas
    function agregarACarrito(producto){
    carro.push(producto);
    console.table(carro);
    // alert("Agregaste "+producto.nombre+" al carrito")
    
    //con sweetAlert2
    Swal.fire({
        title: 'Fantástico!',
        text: `Agregaste ${producto.nombre} al carrito`,
        imageUrl: producto.foto,
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: producto.nombre,
    })
    
    //agregar fila a la tabla de carrito
    tablaBody.innerHTML +=`
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td><button class='btn btn-light'>🗑️</button></td>
        </tr>
    `;
    
    //incrementar el total
    let totalCarrito = carro.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    document.getElementById('total').innerText = 'Total a pagar $: ' + totalCarrito;
    
    //localStorage
    localStorage.setItem('carro', JSON.stringify(carro));
}

//finalizar compra
let finalizarBtn = document.getElementById('finalizar');

finalizarBtn.onclick = () => {
    Toastify({
        text: "Gracias por tu compra! Ya empezamos a preparar tu envio",
        duration: 3000,
        gravity: 'top',
        position: 'right',
        close: true,
        style: {
            background: "#737375",
        },
        offset: {
            x: 150,
            y: 110, 
        },
    }).showToast();
    
    //vaciar el carro y la tabla
    carro = [];
    document.getElementById('tablaBody').innerHTML = ''
    document.getElementById('total').innerText = 'Total a pagar $: ';
    localStorage.removeItem('carro');
}