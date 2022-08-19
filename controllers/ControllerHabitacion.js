//Controllers para la logica de negocio
//realizar un metodo para cada ruta
//La peticion llega al archivo de rutas
export class ControllersHabitacion{
    constructor(){}
    //Buscar habitaciones
    buscarHabitaciones(request,response){
        //Intento resolver la peticion
        try{
           response.status(200).json({ //formato de respuesta estandar
            mensaje:"exito en la consulta", 
            dato:["hbt1", "210USD", "Wifi"]
           })
            

        } catch(error){ //fallo resolviendo la peticion
            response(400).json({
                mensaje:"Fallo en la consulta" +error, 
                dato:null  
            })
        }
    }

    //buscar habitacion por id
    buscarHabitacionId(request,response){
        let identificador=request.params.id
        console.log (identificador)
        try{
            response.status(200).json({
            mensaje:"exito en la consulta " + identificador,
            dato:["hbt1", "210USD", "Wifi"]
            })
             
         } catch(error){ //fallo resolviendo la peticion
             response(400).json({
                mensaje:"Fallo en la consulta" +error, 
                dato:null 
             })
         }
    }

    //agregar la habitacion
    agregarHabitacion(request,response){  
        let cuerpo=request.body
        console.log(cuerpo)
        try{
        response.status(200).json({
          
            mensaje:"exito agregando la habitacion",
            dato:cuerpo
        })
         

     } catch(error){ //fallo resolviendo la peticion
         response(400).json({
            mensaje:"Fallo agregando habitancion" +error, 
            dato:null 
         })
     }}

    //editar habitacion
    editarHabitacion(request,response){ 
        
        //recibir id como parametro
        let id=request.params.id
        //Recibir los datos con los que voy a editas (body)
        let datos=request.body 
        try{
            response.status(200).json({
            mensaje:"exito editando la habitacion" +id,
            dato:datos
        })
             

     } catch(error){ //fallo resolviendo la peticion
         response(400).json({
            mensaje:"Fallo editando habitancion" + error, 
            dato:null
         })
     }}

    //eliminar habitacion
    eliminarHabitacion(request,response){  try{
        response.status(200).json({})
         

     } catch(error){ //fallo resolviendo la peticion
         response(400).json({})
     }}
}