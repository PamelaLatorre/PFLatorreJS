let compraTotal = 0;

let producto = prompt("1- Cuadro 13x18cm Plano... $1270\n2- Cuadro 15x21cm Plano... $1380\n3- Cuadro 21x30cm Plano... $2300\n4- Cuadro 30x40cm Plano... $3000\n5- Cuadro 13x18cm Box ... $1500\n6- Cuadro 15x21cm Box ... $1600\n7- Cuadro 20x25cm Box ... $2300\n8- Cuadro 21x30cm Box ... $2700\n0- Para finalizar");

while(producto != 0){
    switch(producto){
        case "1" : 
            alert("Agregaste Cuadro 13x18cm Plano ... $1270 a tu carrito 🛒");
            sumarCompraTotal (1270);
            break;
        case "2" :
            alert("Agregaste Cuadro 15x21cm Plano ... $1300 a tu carrito 🛒");
            sumarCompraTotal (1300);
            break;
        case "3" :
            alert("Agregaste Cuadro 21x30cm Plano ... $2300 a tu carrito 🛒");
            sumarCompraTotal (2300);
            break; 
        case "4" :
            alert("Agregaste Cuadro 30x40cm Plano ... $3000 a tu carrito 🛒");
            sumarCompraTotal (3000);
            break;
        case "5" :
            alert("Agregaste Cuadro 13x18cm Box ... $1500 a tu carrito 🛒");
            sumarCompraTotal (1500);
            break;
        case "6" :
            alert("Agregaste Cuadro 15x21cm Box ... $1600 a tu carrito 🛒");
            sumarCompraTotal (1600);
            break;
        case "7" :
            alert("Agregaste Cuadro 20x25cm Box ... $2300 a tu carrito 🛒");
            sumarCompraTotal (2300);
            break;
        case "8" :
            alert("Agregaste Cuadro 21x30cm Box ... $2700 a tu carrito 🛒");
            sumarCompraTotal (2700);
            break;
        default :
            alert("Código de cuadro incorrecto ❌");
            break;
    }
    producto = prompt("1- Cuadro 13x18cm Plano... $1270\n2- Cuadro 15x21cm Plano... $1380\n3- Cuadro 21x30cm Plano... $2300\n4- Cuadro 30x40cm Plano... $3000\n5- Cuadro 13x18cm Box ... $1500\n6- Cuadro 15x21cm Box ... $1600\n7- Cuadro 20x25cm Box ... $2300\n8- Cuadro 21x30cm Box ... $2700\n0- Para finalizar");
}

alert ("El monto total de tu compra es $"+ compraTotal)

function sumarCompraTotal (precioCuadro){
    compraTotal = compraTotal + precioCuadro;
    console.log("La compra suma por el momento $" +compraTotal);
}