import {conexion} from "./conexion.js"
import {Producto} from "./models/Producto.entity.js"
import { TipoProducto } from "./models/tipoProducto.entity.js"

//Ejemplo Asíncrono
// conexion.sync().then(()=>{
//     console.log("Conexión éxitosa")
// })

( async () => {
    try{
        await conexion.sync()
        console.log("Conexión éxitosa")

        // const tipoRopa = await TipoProducto.create({
        //     nombre: "Ropa"
        // })
        // const tipoAlimento = await TipoProducto.create({
        //     nombre: "Alimento"
        // })
        // console.log("Tipos de productos creados con exito")

        //creación de producto
        // await Producto.create({nombre: "Polera", precio: 13000, tipo_producto_id: tipoRopa.id})
        // await Producto.create({nombre: "Jeans", precio: 22000, tipo_producto_id: tipoRopa.id})
        // await Producto.create({nombre: "Arroz", precio: 1500, tipo_producto_id: tipoAlimento.id})
        //console.log("Produtos creados con exito")
    
        //Consulta de productos
        // const listadoProductos = await Producto.findAll({
        //     where: {
        //         tipo_producto_id: 1
        //     },
        //     order: [['precio', "DESC"]],
        //     attributes: ["id", "nombre", "precio"],
        //     include: {
        //         model: TipoProducto,
        //         as: "tipoProducto",
        //         attributes: ["id"]
        //     }
        // })
        // console.log(JSON.parse(JSON.stringify(listadoProductos)))

        //Listado de tipos de productos
        const listadoTipos = await TipoProducto.findOne({
            where: 2,
            include: {
                model: Producto,
                as: "productos"
            }
        })
        console.log(JSON.parse(JSON.stringify(listadoTipos)))
    } catch(err){
        console.log(err.message)
    }
   

})()