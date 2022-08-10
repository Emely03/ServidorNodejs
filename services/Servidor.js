
//Variables de entornos son datos del servidor que no dependen del mi logica, el puerto
//const express = require('express') Forma antigua de importar el paquete
//PARA LEER EL ARCHIVO NODE APP.JS

//"type": "module", se coloca en package.json para que el archivo sea modular


//Servicios que son operaciones realizadas en BD, get (EndPoint), post, put y delete
//'/' EndPoint
//2.ATENDIENDO PETICIONES

//3.ESCUCHANDO EL SERVIDOR por el puerto 3000, funcion anonima para verificar que si esta funcionando
//Se pasa el import desde app.js
import express from 'express' //Se está utilizando el paquete express
 //app guarda express

 //se llama las rutas/routes
 import { routes } from '../routes/rutas.js'

//clase es un cunjunto de atirbutos y metodos
export class Servidor{
    constructor(){
        this.app = express()//atributo de la variable
        this.atenderPeticiones()//Se atiende las peticiones del usuario
    }
    
    atenderPeticiones(){//enrutar peticiones
        this.app.use('/', routes)
          
    }

    encenderServidor(){
        this.app.listen(3000, function(){
        console.log("servidor corriendo")
    })
    }


}