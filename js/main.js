/* AL PROGRAMAR
    - Orden
    - organizacion
    - separacion de responsabilidades */


/* VARIABLES */


document.addEventListener('DOMContentLoaded', () => {

const urlBase="https://api.pexels.com/v1";
const claveApi="W6bGyAKdM2oDJPWwjDvbweupPSHBJnELkAotZ94sbeBn97yM5hojILQc";
// const claveApidarwin="W6bGyAKdM2oDJPWwjDvbweupPSHBJnELkAotZ94sbeBn97yM5hojILQc";

const naturecat='search?query=nature';
const peoplecat='search?query=people';
const techcat='search?query=technology';


/* capturar elementos DOM */

/* Acceder al elemento del DOM para crear añadir los options */

// const inputBusqueda= document.querySelector('.menu>form>input');
const btnBusqueda= document.querySelector('.menu>form>button');

const orientacion= document.querySelector('#contenedor>div>select');

const btnfavoritos= document.querySelector('#contenido>artticlediv>button');    

//https://api.pexels.com/v1/search?query=melon&per_page=1


/* EVENTOS */

/* document.addEventListener('click', (ev) => {
         ev.preventDefault();
    if (ev.target.matches('.buscar')) {
         const buscar= ev.target.id;
        console.log(buscar);    
    
    }
}) */

 document.addEventListener('submit', (ev) => {
        ev.preventDefault();
    if (ev.target.matches('.buscar')) {
        //capturar el valor del imput
        const buscar= ev.target.name;
        console.log(buscar);    
    }
})

document.addEventListener('change', (ev) => {
    // ev.preventDefault();
    if (ev.target.matches('.btn')) {
        
    
    }
})

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


const pintarMiniaturas=async()=> {
     try {
        const data=await connect('search?query=naturaleza&per_page=10');
        // console.log(data);
            
    
    } 
    catch(error) {
            console.log('error', error)
    }
    
}


/* INVOCACIÓN A LAS FUNCIONES */
pintarMiniaturas()

})