import App from './components/App.js';
import dataPokemon from "./data/pokemon/pokemon.js";
// import pokemon from './data/pokemon/pokemon.js';
import mezclar from './función/mezclar.js';

document.getElementById('root').appendChild(App());
const primeraMitad = [...dataPokemon.items]
const segundaMitad= primeraMitad.map(pokemon =>{
    let nuevoPokemon={
        id: `${pokemon.id} 2`, 
        image: pokemon.image, 
        bgColor: pokemon.bgColor
    };
    return nuevoPokemon;
})
const data = [...primeraMitad,...segundaMitad];
let tarjetasClickeadas =[];
let coincidencias=[];

const contenedor = document.getElementById ("contenedor");

// const random = Math.floor(Math.random() * data.length);
mezclar(data).forEach ((pokemon)=>{

    const tarjeta = document.createElement("div");
    tarjeta.setAttribute("class", "tarjeta");

    const partePosterior = document.createElement ("div");
    partePosterior.setAttribute("class","parte-posterior clikeado");

    const parteFrontal = document.createElement("div");
    parteFrontal.setAttribute("class", "parte-frontal");

    const nombrePokemon = document.createElement ("p");
    nombrePokemon.textContent=(pokemon.id);
    nombrePokemon.setAttribute("class", "nombrePokemon")

    const imagenPokemon = document.createElement('img');
    imagenPokemon.setAttribute("src", pokemon.image);

    tarjeta.addEventListener('click',()=>{clikear(pokemon.id,tarjeta,partePosterior)});

    parteFrontal.append(imagenPokemon,nombrePokemon);
    tarjeta.append(parteFrontal, partePosterior);
    contenedor.append(tarjeta);
})


function clikear (id, tarjeta,partePosterior) {   
    if(coincidencias.find(elemento=>elemento==id)==undefined){
        //Aquí se agrega la tarjeta al array
        partePosterior.className="parte-posterior";
        tarjetasClickeadas.push(tarjeta)
        coincidencias.push(id) 
    }
    if (coincidencias.length==2){
        
        setTimeout(()=>{
            if(coincidencias[0].substr(0,6)==coincidencias[1].substr(0,6)){
                contenedor.removeChild(tarjetasClickeadas[1])
                contenedor.removeChild(tarjetasClickeadas[0])
                console.log("hubo coincidencia")
            }
            
            tarjetasClickeadas[0].children[1].className="parte-posterior clikeado";
            tarjetasClickeadas[1].children[1].className="parte-posterior clikeado";
            coincidencias=[];
            tarjetasClickeadas=[];
            if(contenedor.children.length==0){
                const mensajeGanador= document.createElement("p");
                mensajeGanador.textContent="¡Ganaste!";
                mensajeGanador.setAttribute("class", "mensaje-ganador");
                const contenedorPrincipal=document.getElementById("contenedor-principal");
                contenedorPrincipal.removeChild(contenedor);
                contenedorPrincipal.append(mensajeGanador);
            }
        },1000)
    }
    
    
}