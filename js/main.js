/* AL PROGRAMAR
    - Orden
    - organizacion
    - separacion de responsabilidades */


/* VARIABLES */


//document.addEventListener('DOMContentLoaded', () => {

const urlBase="https://api.pexels.com/v1";
const claveApi="W6bGyAKdM2oDJPWwjDvbweupPSHBJnELkAotZ94sbeBn97yM5hojILQc";
// const claveApidarwin="W6bGyAKdM2oDJPWwjDvbweupPSHBJnELkAotZ94sbeBn97yM5hojILQc";

const naturecat='search?query=nature';
const peoplecat='search?query=people';
const techcat='search?query=technology';


/* capturar elementos DOM */

const form= document.querySelector('#form');
const input = document.querySelector('#busqueda');
const orientacion= document.querySelector('#listaopciones');
const muestrafavoritos= document.querySelector('#muestrafavoritos');
const palabrabuscada = document.querySelector('#busqueda');  

/* EVENTOS */
//Evento que dispara la busqueda por la palabra introducida en el campo de búsqueda
form.addEventListener('submit', (ev) => {
            ev.preventDefault(); 
            const palabra = palabrabuscada.value.trim(); 
             validarpalabra(palabra);
});

//Evento que dispara el filtro para mostrar imagenes según su posición
orientacion.addEventListener('change', (ev) => {
    const posicion = ev.target.value;
    console.log ('Has seleccionado:', posicion);
    if (posicion==='Todas'){
        console.log ('Mostrando todas las imagenes...');
    }else if (posicion==='portait'){
        console.log ('Mostrando las imágenes verticales...');
    }else{
        console.log('Mostrando todas las imágenes horizontales...');
    }
});
//Evento que muestra otra ventana con las imagenes marcadas como favoritos
muestrafavoritos.addEventListener('click', (ev) => {
   window.open('favoritos.html','_blank');   
});

//Evento para agregar favorito (tiene que guardarse en localstorage)

/* FUNCIONES */


const connect = async (url) => {
    
    // console.log(`${urlBase}/${url}`)
    try{
        const resp= await fetch(`${urlBase}/${url}`,{
            method:'GET',
            headers:{
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
};


const validarpalabra = (palabra) =>   {

    if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(palabra)) {
           console.log("palabra admitida", palabra)
    }
            
}


const pintarMiniaturas=async()=> {
     try {
        const data=await connect('search?query=naturaleza&per_page=10');
        // console.log(data);
    } 
    catch(error) {
            console.log('error', error)
    }
    
};


/* INVOCACIÓN A LAS FUNCIONES */
pintarMiniaturas()

//})