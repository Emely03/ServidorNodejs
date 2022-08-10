

import {Servidor} from './services/Servidor.js'
import 'dotenv/config'

//Para utilizar una clase se debe primero instanciar
//Para usar una clase debo crear un objeto (ES UNA VARIABLE)
//para usar una clase le debo sacar copia

let servidorNodejs=new Servidor()
servidorNodejs.encenderServidor()