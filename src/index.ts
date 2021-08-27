import "reflect-metadata";
import {createConnection} from "typeorm";
import app from "./app"
import * as dbConfig from "../ormconfig.js"

require("dotenv").config()

// createConnection(dbConfig).then(async connection => {

//     console.log("db connected");

// }).catch(error => console.log(error));
const PORT: string | number = 5000 || process.env.PORT
app.listen(PORT,()=>{
    console.log('server started')
})