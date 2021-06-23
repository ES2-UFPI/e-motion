require('dotenv/config');

module.exports = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": process.env.BD_USERNAME,
    "password": process.env.BD_PASSWORD,
    "database": "emotion",
    "migrations":["./src/database/migrations/**.ts"],
    "cli":{
        "migrationsDir":"./src/database/migrations"
    },
    "entities":["./src/entities/**.ts"] 
}