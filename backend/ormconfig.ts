require('dotenv/config');

module.exports = {
    "type": process.env.DB_DRIVER,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "synchronize": true,
    "migrations":["./src/database/migrations/**.ts"],
    "cli":{
        "migrationsDir":"./src/database/migrations"
    },
    "entities":["./src/entities/**.ts"],
    "extra": {
        "ssl": { "rejectUnauthorized": false }
   }
}