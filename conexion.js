import {Sequelize} from "sequelize"

const conexion = new Sequelize({
    host: "localhost",
    port: 5432,
    database: "orm_relaciones",
    user: "postgres",
    password: "postgres",
    dialect: "postgres"
})

export { conexion }