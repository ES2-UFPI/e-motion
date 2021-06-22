require('dotenv/config');

module.exports = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": process.env.PASSWORD,
    "database": "emotion",
    "migrations":["./src/database/migrations/**.ts"],
    "cli":{
        "migrationsDir":"./src/database/migrations"
    },
    "entities":["./src/entities/**.ts"] 
}