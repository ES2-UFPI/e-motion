require('dotenv/config');

module.exports = {
    "type": "mysql",
    "host": process.env.BD_HOST,
    "port": process.env.BD_PORT,
    "username": process.env.BD_USERNAME,
    "password": process.env.BD_PASSWORD,
    "database": process.env.BD_NAME,
    "synchronize": true,
    "migrations":["./src/database/migrations/**.ts"],
    "cli":{
        "migrationsDir":"./src/database/migrations"
    },
    "entities":["./src/entities/**.ts"] 
}
