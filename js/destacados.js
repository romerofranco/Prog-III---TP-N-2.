//1. Generamos el arrays de las comidas 
const comidas =[
    {nombre : "🍕 Pizza", descripcion: "La clasica italiana con muzzarella y tomate."},
    {nombre : "🍣 Sushi", descripcion: "Comida japonesa de arroz con pescado fresco."},
    {nombre : "🌮 Taco", descripcion: "Tortillas mexicanas con carne y verduras."},
    {nombre : "🍔 Hamburguesa", descripcion: "Medallon de carne con pan, lechuga y tomate."},
];

//2 . Buscamos el contenedor y el contador de la pagina
const contenedor = document.getElementById("contenedor-tarjetas");
const contador = document.getElementById("contador");

//3. Crearemos una tarjeta por cada comida.
comidas.forEach(function(comida) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.innerHTML = `
        <h2>${comida.nombre}</h2>
        <p>${comida.descripcion}</p>
    `;
    
    //4. configuracion del evento del click
    tarjeta.addEventListener("click",function(){
        tarjeta.classList.toggle("seleccionada");
        actualizarContador();
    });
    contenedor.appendChild(tarjeta);
});

// 5. Funcion para contar las tarjetas
function actualizarContador() {
    const seleccionadas = document.querySelectorAll(".seleccionada");
    contador.textContent = "Seleccionada: " + seleccionadas.length;
}

