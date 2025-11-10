/* AL PROGRAMAR
    - Orden
    - organizacion
    - separacion de responsabilidades */


/* VARIABLES */
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
const urlBase="https://www.pexels.com/es-es/api";
const claveApi="KMDb7NM7edekXPlf2hLfhNSpsRtoXls5xEFzaWgjkMVUufY8ifnopuwJ";
// const claveApidarwin="W6bGyAKdM2oDJPWwjDvbweupPSHBJnELkAotZ94sbeBn97yM5hojILQc";

const connect = async (url) => {
    try{
        const resp = await fetch(`${urlBase}/${url}`)
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

const inputBusqueda= document.querySelector('.menu>form>input');
const btnBusqueda= document.querySelector('.menu>form>button');

const orientacion= document.querySelector('#contenedor>div>select');

// const galeria= document.querySelector('#contenedor>div>select');
const btnfavoritos= document.querySelector('#contenido>artticlediv>button');

/* EVENTOS */


/* FUNCIONES */


    function connectPexels(){
        connect('page=1')
        .then((respuesta) => {
          const array =  Object.keys(respuesta.message);
            console.log(array);
          return array;
        })
        .catch((error) => {
            console.log('error', error)
        })  
    }








/* INVOCACIÓN A LAS FUNCIONES */