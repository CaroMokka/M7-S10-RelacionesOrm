import DataTypes from "sequelize"
import {conexion} from "../conexion.js"

const TipoProducto = conexion.define("TipoProducto", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
},
{
    tableNName: "tipos_productos",
    timestamps: false
})

export { TipoProducto }