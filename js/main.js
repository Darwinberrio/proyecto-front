/* AL PROGRAMAR
    - Orden
    - organizacion
    - separacion de responsabilidades */


/* VARIABLES */

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


/* INVOCACIÓN A LAS FUNCIONES */