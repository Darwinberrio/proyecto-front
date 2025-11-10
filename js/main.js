/* AL PROGRAMAR
    - Orden
    - organizacion
    - separacion de responsabilidades */


/* VARIABLES */
const claveApi="KMDb7NM7edekXPlf2hLfhNSpsRtoXls5xEFzaWgjkMVUufY8ifnopuwJ";
const baseUrl="https://www.pexels.com/es-es/api";
const galeria=;
const btnBusqueda=;
const inputBusqueda=;
const orientacion=;
const favoritos=;

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


/* EVENTOS */


/* FUNCIONES */
cargarImagenes=()=>{

};



/* INVOCACIÓN A LAS FUNCIONES */