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
const muestraFavoritos= document.querySelector('#muestrafavoritos');
const palabrabuscada = document.querySelector('#busqueda');  
const catInicio = document.querySelector('#catInicio');  
const galeria = document.querySelector('#galeria');  
const errorPalabra = document.querySelector('#errorPalabra');



const urlBase="https://api.pexels.com/v1";
const claveApi="W6bGyAKdM2oDJPWwjDvbweupPSHBJnELkAotZ94sbeBn97yM5hojILQc";
// const claveApidarwin="W6bGyAKdM2oDJPWwjDvbweupPSHBJnELkAotZ94sbeBn97yM5hojILQc";

let consulta;
let page=1;
let orientation;
let guardarFavorito;

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
             //validarpalabra(palabra);
             consulta=validarpalabra(palabra);
             pintarMiniaturas();             
});

//Evento que dispara el filtro para mostrar imagenes según su posición
orientacion.addEventListener('change', (ev) => {
        const posicion = ev.target.value;
        //console.log(posicion);
        if (ev.target.matches('#orientacion'))
            orientation=posicion;
            pintarMiniaturas();
        }
        
);
//Evento que muestra las categorias de inicio:
document.addEventListener('click', (ev) => {

    if(ev.target.matches('#catInicio button')){
        consulta=ev.target.id;
        pintarMiniaturas();
    }

    if(ev.target.matches('#muestraFavoritos')){

    }

    if(ev.target.matches('.addFavoritos')){
        const id=ev.target.id;
        const objeto=arrayPexels.find((id)=>Object);
        console.log(objeto)
    
       localStorage.setItem(id,JSON.stringify(id));
         
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


const validarpalabra = (palabra)=>{
    const regEXP=/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/

    if (regEXP.test(palabra)) {
           console.log("palabra admitida", palabra)
           return(palabra)
    }else{
        errorPalabra.textContent('la palabra nonpuede contener números')
    }
            
}

const pintarCategoriasIniciales=async(obj) =>{
    galeria.innerHTML="";
    try{
        const data= await connect(`photos/${obj.id}`);         
        const card = document.createElement('article');
        const caja = document.createElement('div');    
        const imagen = document.createElement('img');    
        const btn = document.createElement('button');
        imagen.src = data.src.small;
        btn.textContent = obj.categoria ; 
        btn.id = obj.categoria ;
        caja.append(imagen)
        card.append(caja,btn)       
                
        catInicio.append(card)

    }catch (error){
        console.log(error)
    }
};


const pintarMiniaturas=async()=>{
    galeria.innerHTML="";
     try {
        const data=await connect(`search?query=${consulta}&per_page=10&page=${page}&orientation=${orientation}`);
        let arrayFotos=data.photos;
        console.log(arrayFotos);
        arrayFotos.forEach((obj)=>{
             const card = document.createElement('article');
             const caja2 = document.createElement('div');    
             const imagen2 = document.createElement('img');    
            imagen2.src = obj.src.small;
            imagen2.alt = obj.alt;
            const tituloAutor=document.createElement('H3')
            tituloAutor.textContent=obj.photographer
            const btn2 = document.createElement('button');
            btn2.textContent='Añadir a favoritos';
            btn2.id=obj.id;
            btn2.classList.add('addFavoritos');
            
             caja2.append(imagen2)
             card.append(caja2,tituloAutor,btn2)       
             fragment.append(card)
        })
     
     ;
         galeria.append(fragment)
        
    } 
    catch(error) {
            (error)
    }
    
};

const arrayPexels=async()=>{
    try {
        const data=await connect(`search?query=${consulta}&per_page=10&page=${page}&orientation=${orientation}`);
        let array=data.photos;
    } 
    catch(error) {
            (error)
    }
    console.log(arrayPexels)
};
const addToFavorites=(id)=>{
        localStorage.setItem(id,JSON.stringify(id));
}
/* INVOCACIÓN A LAS FUNCIONES */

const init=()=>{
    arrayCategorias.forEach(element => {
        pintarCategoriasIniciales(element)
    });
   
}
init()

//})

