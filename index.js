import {conexion} from "./conexion.js"
import {Producto} from "./models/Producto.entity.js"

//Ejemplo Asíncrono
// conexion.sync().then(()=>{
//     console.log("Conexión éxitosa")
// })

( async () => {
    try{
        await conexion.sync()
        console.log("Conexión éxitosa")
    
        const listadoProductos = await Producto.findAll()
        console.log(listadoProductos)
    } catch(err){
        console.log(err.message)
    }
   

})()