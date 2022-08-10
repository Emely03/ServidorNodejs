import express from 'express' 

//Variable para personalizar las rutas (ENDPONTS) de mis servicios
export let routes=express.Router()

//Escribos mis rutas (Cada ruta es un servicio)

routes.get('viajes/v1/habitaciones', function (req, res) { //funcion anonima que se ejecuta apenas se recibe la petición
    res.send('Hello World')
  })//Obtiene todo

routes.get('viajes/v1/habitacion/id', function (req, res) { //funcion anonima que se ejecuta apenas se recibe la petición
    res.send('Hello World')

  })//Obtiene solo una con un parametro
routes.post('viajes/v1/reserva', function (req, res) { //funcion anonima que se ejecuta apenas se recibe la petición
    res.send('Hello World')
  })//Crear reservas

routes.put('viajes/v1/habitaciones/id', function (req, res) { //funcion anonima que se ejecuta apenas se recibe la petición
    res.send('Hello World')
  })//actualizar la reserva

routes.delete('viajes/v1/cancelacion/id', function (req, res) { //funcion anonima que se ejecuta apenas se recibe la petición
    res.send('Hello World')
  })//cancelar o eliminar la reserva