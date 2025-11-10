/* AL PROGRAMAR
    - Orden
    - organizacion
    - separacion de responsabilidades */


/* VARIABLES */


const urlBase="https://api.pexels.com/v1";
const claveApi="KMDb7NM7edekXPlf2hLfhNSpsRtoXls5xEFzaWgjkMVUufY8ifnopuwJ";
// const claveApidarwin="W6bGyAKdM2oDJPWwjDvbweupPSHBJnELkAotZ94sbeBn97yM5hojILQc";

const connect = async () => {
    try{
        const resp= await fetch(`${urlBase}`,{
            method:'GET',
            Headers:{
                'Authorization': claveApi
            }
        })
        if (resp.ok){
            const data = await resp.json()
            return data
        }else {
            throw ` este es el error`
        }

    } catch (error) {
        throw (error + ' tenemos que gestionar este errror')
    }
}

/* capturar elementos DOM */

/* Acceder al elemento del DOM para crear añadir los options */

// const inputBusqueda= document.querySelector('.menu>form>input');
const btnBusqueda= document.querySelector('.menu>form>button');

const orientacion= document.querySelector('#contenedor>div>select');

const btnfavoritos= document.querySelector('#contenido>artticlediv>button');

/* EVENTOS */

document.addEventListener('click', (ev) => {
    // ev.preventDefault();
    if (ev.target.matches('.btn')) {
        
    
    }
})

/* FUNCIONES */

async function nature() {
     try {
        const resp=await fetch ('https://api.pexels.com/v1/search?query=nature');
        const data=resp.json();
       
        if (resp.ok){
            return data}
    } 
    catch(error) {
            console.log('error', error)
    }
       console.log (data) 
    
}
    
 

/* async function buscador(){
    try{
        const resp= await connect('#photos-search');
        const data = resp.json();
        if (resp.ok){
            return 
        }

    }
} */







































// Utilidades de LocalStorage
const LS_KEY = 'favorites_v1';

function favoritos() {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY)) || [];
  } catch {
    return [];
  }
}

function guardarFavoritos(list) {
  localStorage.setItem(LS_KEY, JSON.stringify(list));
  updateFavoritesCount();
}

function favorito(id) {
  return favoritos().some(p => p.id === id);
}

function añadirFavorito(photo) {
  const favs = favoritos();
  if (!favs.some(p => p.id === photo.id)) {
    favs.push({ ...photo, savedAt: new Date().toISOString() });
    guardarFavoritos(favs);
  }
}

function borrarfavorito(id) {
  const favs = loadFavorites().filter(p => p.id !== id);
  guardarFavoritos(favs);
}

function actualizarFavorito() {
  el.favCount.textContent = String(favoritos().length);
}














/* INVOCACIÓN A LAS FUNCIONES */