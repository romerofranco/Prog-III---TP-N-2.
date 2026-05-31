//1 . Empezaremos construyendo el arreglo con las meriendas.
const meriendas = [
    "🥐 Medialunas con manteca",
    "🍌 Banana con yogurt natural",
    "🧇 Tostadas con mermelada casera",
    "🍎 Mazana con mantequilla de mani", 
    "🥛 Leche con galletas"
];

//2. Buscamos el div en donde vamos a insertar las meriendas
const contenedor = document.getElementById("lista-merienda");

//3. Vamos a recorrer el arreglo y crearemos las tarjetas
meriendas.forEach(function(merienda){
    const div = document.createElement("div"); 
    div.classList.add("merienda");
    div.textContent = merienda;
    contenedor.appendChild(div);
});

//4 . Configuracion del boton para muestra
const boton = document.getElementById("boton-contar");
const resultado = document.getElementById("resultado");

// agregamos el evento al hacer click en el boton
boton.addEventListener("click", function(){
    resultado.textContent = "Hay " + meriendas.length + " meriendas en el menu."; 
});