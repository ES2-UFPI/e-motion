import {createConnection} from 'typeorm'

//const connection = async() => await createConnection();

createConnection();
console.log("Database Connected");