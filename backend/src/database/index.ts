import {createConnection} from 'typeorm'

createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: process.env.BD_USERNAME,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_DATABASE
})