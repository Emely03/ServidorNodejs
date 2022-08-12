//Controllers para la logica de negocio
//realizar un metodo para cada ruta
//La peticion llega al archivo de rutas
class ControllersHabitacion{
    constructor(){}
    //Byscar habitaciones
    buscarHabitacion(request,response){
        //Intento resolver la peticion
        try{
           response.status(200).json({})
            

        } catch(error){ //fallo resolviendo la peticion
            response(400).json({})
        }
    }

    //buscar habitacion por id
    buscarHabitacionId(request,response){
        try{
            response.status(200).json({})
             
 
         } catch(error){ //fallo resolviendo la peticion
             response(400).json({})
         }
    }

    //agregar la habitacion
    agregarHabitacion(request,response){  try{
        response.status(200).json({})
         

     } catch(error){ //fallo resolviendo la peticion
         response(400).json({})
     }}

    //editar habitacion
    editarHabitacion(request,response){  try{
        response.status(200).json({})
         

     } catch(error){ //fallo resolviendo la peticion
         response(400).json({})
     }}

    //eliminar habitacion
    eliminarHabitacion(request,response){  try{
        response.status(200).json({})
         

     } catch(error){ //fallo resolviendo la peticion
         response(400).json({})
     }}
}