import DataTypes from "sequelize"
import {conexion} from "../conexion.js"
import {TipoProducto} from "./tipoProducto.entity.js"

const Producto = conexion.define("Producto",{
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(80),
        unique: true,
        allowNull: false
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    tipo_producto_id: {
        type: DataTypes.INTEGER,
        references: {
            model: TipoProducto,
            key: "id"
        }
    }
})

TipoProducto.hasMany(Producto, {
    foreignKey: "tipo_producto_id",
    as: "productos"
})
Producto.belongsTo(TipoProducto, {
    foreignKey: "tipo_producto_id",
    as: "tipoProducto"
})

export {Producto}