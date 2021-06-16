import {createConnection} from 'typeorm'

const connection = async() => await createConnection();

connection();
console.log("Database Connected");