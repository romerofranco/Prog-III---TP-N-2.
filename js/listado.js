//1 . El arreglo con los paises y su categoria. 
const paises =[
    {nombre: "🗼 Francia", categoria: "europa"},
    {nombre: "🍺 Alemania", categoria: "europa"},
    {nombre: "🍕 Italia", categoria: "europa"},
    {nombre: "⚽ Brasil", categoria: "america"},
    {nombre: "🥩 Argentina", categoria: "america"},
    {nombre: "🌮 Mexico", categoria: "america"},
];

//2. buscamos el contenedor en la pagina
const contenedor = document.getElementById("contenedor-paises");

//3. Funcion que muestra los paises en pantalla
function mostrarPaises(lista) {
    contenedor.innerHTML = "";
    lista.forEach(function(pais){
        const div = document.createElement("div");
        div.classList.add("pais");
        div.innerHTML = `
            <h2>${pais.nombre}</h2>
            <p>${pais.categoria}</p>
        `;
        contenedor.appendChild(div);
    });
}

//4. Mostramos todos los paises al cargar la pagina
mostrarPaises(paises);

//5. Boton para mostrar todos
document.getElementById("boton-todos").addEventListener("click", function() {
        mostrarPaises(paises);
});

//6. Boton para filtrar solo Europa
document.getElementById("boton-europa").addEventListener("click",function(){
    const soloEuropa = paises.filter(function(pais){
        return pais.categoria === "europa";
    });
    mostrarPaises(soloEuropa);
});

//7. Boton para filtrar solo America
document.getElementById("boton-america").addEventListener("click", function(){
    const soloAmerica = paises.filter(function(pais){
        return pais.categoria === "america";
    });
    mostrarPaises(soloAmerica);
});