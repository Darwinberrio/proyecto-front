/* AL PROGRAMAR
    - Orden
    - organizacion
    - separacion de responsabilidades */


/* VARIABLES */


//document.addEventListener('DOMContentLoaded', () => {
    /* capturar elementos DOM */

const form= document.querySelector('#formu');
const input = document.querySelector('#busqueda');
const orientacion= document.querySelector('#listaopciones');
const muestrafavoritos= document.querySelector('#muestrafavoritos');
const palabrabuscada = document.querySelector('#busqueda');  
const catInicio = document.querySelector('#catInicio');  
const Galeria = document.querySelector('#Galeria');  

const urlBase="https://api.pexels.com/v1";
const claveApi="W6bGyAKdM2oDJPWwjDvbweupPSHBJnELkAotZ94sbeBn97yM5hojILQc";
// const claveApidarwin="W6bGyAKdM2oDJPWwjDvbweupPSHBJnELkAotZ94sbeBn97yM5hojILQc";

let consulta;
let page=3;
let orientation=null;

const fragment=document.createDocumentFragment()

const arrayCategorias=[
    {
        id:34607914,
        categoria:'nature'
    },
    {
        id:356056,
        categoria:'technology'
    },
    {
        id:2014773,
        categoria:'people'
    }
]






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
document.addEventListener('click', (ev) => {

    if(ev.target.matches('#catInicio button')){
        consulta=ev.target.id

        pintarMiniaturas()
    }
   
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

const pintarCategoriasIniciales=  () =>{

    arrayCategorias.forEach(obj => {

        const data=connect(`photos/${obj.id}`)
        

        const card = document.createElement('article');    
        const btn = document.createElement('BUTTON');        
        btn.textContent ='Buscar';
        btn.id = obj.categoria ;
        // btn.classList.add('tag');

        card.append(btn)
        fragment.append(card);
    });
    catInicio.append(fragment)

};

// const async obtenerDatos = () =>{
//     try{
//         const respuesta = await connect ('search?query=nature')
//         console.log(respuesta);
//     }catch{
//             console.log('Error:', error);
//     }
// }

// obtenerDatos();

const pintarMiniaturas=async()=> {
     try {
        console.log(`pintarMiniaturas`)
        const data=await connect(`search?query=${consulta}&per_page=10&page=${page}&orientation=${orientation}`);
         console.log(data);
    } 
    catch(error) {
            console.log('error', error)
    }
    
};


/* INVOCACIÓN A LAS FUNCIONES */

const init=()=>{
    pintarCategoriasIniciales()
}
init()

//})