# e-motion

- [Figma](https://www.figma.com/file/zrPp9YGbieg5SpGiZte6QR/e-motion?node-id=0%3A1)


### Estrutura do ormconfig.json
```json
    {
        "type": "mysql",
        "host": "localhost",
        "port": 3306,
        "username": "",
        "password": "",
        "database": "emotion",
        "migrations":["./src/database/migrations/**.ts"],
        "cli":{
            "migrationsDir":"./src/database/migrations"
        },
        "entities":["./src/entities/**.ts"] 
    }

```