
require("dotenv").config()
module.exports = {
   "type":"postgres",
   "host":process.env.DB_HOST,
   "port":5432,
   "username":process.env.DB_USER,
   "password": process.env.DB_PASSWORD,
   "database":process.env.DB_NAME,
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/api/*.model.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}