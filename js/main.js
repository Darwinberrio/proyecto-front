/* AL PROGRAMAR
    - Orden
    - organizacion
    - separacion de responsabilidades */


/* VARIABLES */


//document.addEventListener('DOMContentLoaded', () => {
    /* capturar elementos DOM */

const form= document.querySelector('#form');
const input = document.querySelector('#busqueda');
const orientacion= document.querySelector('#orientacion');
const muestrafavoritos= document.querySelector('#muestrafavoritos');
const palabrabuscada = document.querySelector('#busqueda');  
const catInicio = document.querySelector('#catInicio');  
const Galeria = document.querySelector('#Galeria');  

const urlBase="https://api.pexels.com/v1";
const claveApi="W6bGyAKdM2oDJPWwjDvbweupPSHBJnELkAotZ94sbeBn97yM5hojILQc";
// const claveApidarwin="W6bGyAKdM2oDJPWwjDvbweupPSHBJnELkAotZ94sbeBn97yM5hojILQc";

let consulta;
let page=3;
let orientation='square';

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
        pintarMiniaturas('Todas');
    }else if (posicion==='portait'){
        pintarMiniaturas('portait');
    }else{
        pintarMiniaturas('landscape');
    }
});
//Evento que muestra las categorias de inicio:
document.addEventListener('click', (ev) => {

    if(ev.target.matches('#catInicio button')){
        consulta=ev.target.id;
        pintarMiniaturas();
    }
    else if(ev.target.matches('#Galeria')){
        consulta=ev.target.id;
        pintarMiniaturas();
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
            throw (` este es el error`)
        }

    } catch (error) {
        throw (error + ' tenemos que gestionar este error')
    }
};


const validarpalabra = (palabra) =>   {

    if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(palabra)) {
           console.log("palabra admitida", palabra)
    }            
}

const pintarCategoriasIniciales = () =>{  
        
      /*   for (const obj of arrayCategorias) {
        const data = await connect(`photos/${obj.id}`);  */     
        arrayCategorias.forEach(obj => {

        const data= connect(`photos/${obj.id}`) 
        const data= await connect(`photos/${obj.id}`);         
        const card = document.createElement('article');
        const caja = document.createElement('div');    
        const imagen = document.createElement('img');    
        const btn = document.createElement('button');

        imagen.src = obj.id;
        imagen.alt = obj.categoria
        imagen.src = data.src.small;
        btn.textContent = obj.categoria ; 
        btn.id = obj.categoria ;
        caja.append(imagen)
        card.append(caja,btn)       
        fragment.append(card);
    });
                
        catInicio.append(fragment)
};

/*const pintarMiniaturas=async()=> {
     try {
        // console.log(`pintarMiniaturas`)
        const data = await connect(`search?query=${consulta}&per_page=10&page=${page}&orientation=${orientation}`);
              
        
    } 
    catch(error) {
            console.log('error', error)
    }
    
};*/
const pintarMiniaturas=async(consulta, page, orientation)=> {
    
     try {
        const data=await connect(`search?query=${consulta}&per_page=10&page=${page}&orientation=${orientation}`);
        const card2 = document.createElement('article');
        const caja2 = document.createElement('div');    
        const imagen2 = document.createElement('img');    
        const btn2 = document.createElement('button');
        imagen2.src = data.src.small;
        btn2.textContent = obj.categoria ; 
        btn2.id = obj.categoria ;
        caja2.append(imagen2)
        card2.append(caja2,btn2)       
        fragment.append(card2);

        Galeria.append(fragment)
        
    } 
    catch(error) {
            (error)
    }
    
};

/* INVOCACIÓN A LAS FUNCIONES */

const init=()=>{
    pintarCategoriasIniciales()
    
    arrayCategorias.forEach(element => {
        pintarCategoriasIniciales(element)
    });
    data.forEach(element=>{
        pintarMiniaturas(consulta, page, orientation)
    }

    )
}
init()
pintarMiniaturas()


//})

