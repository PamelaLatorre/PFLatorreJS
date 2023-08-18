const categoriaSelect = document.getElementById('categoria');
const buscarBtn = document.getElementById('busquedaButton');
const salidaBtn = document.getElementById('salida');
const resultadoDiv = document.getElementById('resultado');

//incorporamos cards de Bootstrap
let carro = JSON.parse(localStorage.getItem('carro')) || [];

let tablaBody = document.getElementById("tablaBody");
let botones = document.getElementsByClassName("compra");

// Función para renderizar las cards de productos en un contenedor
function renderizarProductos(productos, contenedor) {
    const contenedorElement = document.getElementById(contenedor);
    contenedorElement.innerHTML = ''; // Limpiar el contenido del contenedor
    
    productos.forEach((producto) => {
        contenedorElement.innerHTML += `
            <div class="card col-sm-2 cards">
                <img src="${producto.foto}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">Precio $ ${producto.precio}</p>
                    <button id="${producto.id}" class="btn btn-primary compra">Comprar</button>
                </div>
            </div>
        `;
    });
}

//lista de cuadros
let contenedorCuadro = document.getElementById("listaCuadros");

    for (const producto of cuadros){
        contenedorCuadro.innerHTML += `
        <div class="card col-sm-2 cards">
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
        <div class="card col-sm-2 cards">
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
        <div class="card col-sm-2 cards">
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
        <div class="card col-sm-2 cards">
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
        imageWidth: 130,
        imageHeight: 130,
        imageAlt: producto.nombre,
    })
    
    //agregar fila a la tabla de carrito
    tablaBody.innerHTML +=`
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td><button class='btn btn-light eliminar-producto' data-index='${carro.length - 1}'>🗑️</button></td>
        </tr>
`;
    
//incrementar el total
let totalCarrito = carro.reduce((acumulador, producto) => acumulador + producto.precio, 0);
document.getElementById('total').innerText = 'Total a pagar $: ' + totalCarrito;
    
//localStorage
localStorage.setItem('carro', JSON.stringify(carro));
}

//función para actualizar el total del carrito
function actualizarTotalCarrito() {
    let totalCarrito = carro.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    document.getElementById('total').innerText = 'Total a pagar $: ' + totalCarrito;
}

//ponemos en funcionamiento el boton de eliminar
tablaBody.addEventListener('click', (event) => {
    if (event.target.classList.contains('eliminar-producto')) {
        const button = event.target;
        const index = parseInt(button.getAttribute('data-index'), 10);

        if (!isNaN(index) && index >= 0 && index < carro.length) {
            carro.splice(index, 1); //eliminamos el producto de la tabla
            actualizarTablaCarrito(); //actualiza la tabla de carrito
            actualizarTotalCarrito(); //actualiza el total del carrito 
            localStorage.setItem('carro', JSON.stringify(carro)); //actualiza el local storage
        }
    }
});

//función para actualizar la tabla de carrito
function actualizarTablaCarrito() {
    let tablaHTML = '';

    for (const producto of carro) {
        tablaHTML += `
            <tr>
                <td>${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
                <td><button class='btn btn-light eliminar-producto' data-index='${carro.indexOf(producto)}'>🗑️</button></td>
            </tr>
        `;
    }

    tablaBody.innerHTML = tablaHTML;

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
    
//incrementar el total
let totalCarrito = carro.reduce((acumulador, producto) => acumulador + producto.precio, 0);
document.getElementById('total').innerText = 'Total a pagar $: ' + totalCarrito;

//localStorage
localStorage.setItem('carro', JSON.stringify(carro));

//vaciar el carro y la tabla
carro = [];
document.getElementById('tablaBody').innerHTML = ''
document.getElementById('total').innerText = 'Total a pagar $: ';
localStorage.removeItem('carro');
}

//evento para el boton Buscar
buscarBtn.addEventListener('click', () => {
    const categoriaSeleccionada = categoriaSelect.value;

    try {
        const prodsFiltrados = filtrarPorNombre(categoriaSeleccionada);
        if (prodsFiltrados.length === 0) {
            resultadoDiv.innerHTML = "No se encontraron productos con ese nombre ❌";
        } else {
            // Limpiar las secciones de productos
            document.getElementById("listaCuadros").innerHTML = "";
            document.getElementById("listaEspejos").innerHTML = "";
            document.getElementById("listaTapices").innerHTML = "";
            document.getElementById("listaAlmoha").innerHTML = "";

            // Renderizar productos filtrados en la sección correspondiente
            renderizarProductos(
                categoriaSeleccionada === "cuadros" ? prodsFiltrados : [],
                "listaCuadros"
            );
            renderizarProductos(
                categoriaSeleccionada === "espejos" ? prodsFiltrados : [],
                "listaEspejos"
            );
            renderizarProductos(
                categoriaSeleccionada === "tapices" ? prodsFiltrados : [],
                "listaTapices"
            );
            renderizarProductos(
                categoriaSeleccionada === "almohadones" ? prodsFiltrados : [],
                "listaAlmoha"
            );

            resultadoDiv.innerHTML = ""; // Limpiar el resultado anterior si lo hubiera
        }
    } catch (error) {
        resultadoDiv.innerHTML = error.message;
    }
});

function filtrarPorNombre(categoria) {
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
            throw new Error('No encontramos tu producto ❌');
    }

    return productos || []; // Devuelve el arreglo de productos o un arreglo vacío si no hay coincidencia
}

function renderizarProductos(productos, contenedor) {
    const contenedorElement = document.getElementById(contenedor);
    contenedorElement.innerHTML = ''; // Limpiar el contenido del contenedor

    productos.forEach((producto) => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card col-sm-2 cards';

        const imgElement = document.createElement('img');
        imgElement.src = producto.foto;

        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.className = 'card-body';

        const titleElement = document.createElement('h5');
        titleElement.className = 'card-title';
        titleElement.textContent = producto.nombre;

        const priceElement = document.createElement('p');
        priceElement.className = 'card-text';
        priceElement.textContent = `Precio $ ${producto.precio}`;

        const buyButton = document.createElement('button');
        buyButton.id = producto.id;
        buyButton.className = 'btn btn-primary compra';
        buyButton.textContent = 'Comprar';

        cardBodyDiv.appendChild(titleElement);
        cardBodyDiv.appendChild(priceElement);
        cardBodyDiv.appendChild(buyButton);

        cardDiv.appendChild(imgElement);
        cardDiv.appendChild(cardBodyDiv);

        contenedorElement.appendChild(cardDiv);
    });
}

//evento para el boton Limpiar
salidaBtn.addEventListener('click', () => {
    // Restablecer la página 2 a su estado original
    categoriaSelect.value = ''; // Reiniciamos el valor del select
    resultadoDiv.innerHTML = ''; // Borramos los resultados de búsqueda

 // Limpiar las secciones de productos
 document.getElementById("listaCuadros").innerHTML = "";
 document.getElementById("listaEspejos").innerHTML = "";
 document.getElementById("listaTapices").innerHTML = "";
 document.getElementById("listaAlmoha").innerHTML = "";

 // Volver a renderizar todos los productos originales
 renderizarProductos(cuadros, "listaCuadros");
 renderizarProductos(espejos, "listaEspejos");
 renderizarProductos(tapices, "listaTapices");
 renderizarProductos(almohadones, "listaAlmoha");

});

//json local
let inspirateMiMusa = document.getElementById("inspirate-mi-musa");

function obtenerJsonPropio(){
    const URLJSON = "/users.json";
    fetch(URLJSON)
    .then(resp => resp.json())
    .then(data => {
        console.log(data.inspirateConMiMusa);
        const listaInspi = data.inspirateConMiMusa;
        console.log(listaInspi);
    
        //cargamos las cards de las imagenes solicitadas
        for(const prod of listaInspi){
            inspirateMiMusa.innerHTML +=`
                <div class="card col-sm-2 cards">
                    <img src= "${prod.imagen}">
                    <div class="card-body">
                        <h5 class="card-title">${prod.nombre}</h5>
                        <h6 class="card-title">${prod.categoria}</h6>
                        <p class="card-text">Detalle: ${prod.descripcion}</p>
                    </div>
                </div>
            `;
        }
    })
}

obtenerJsonPropio();