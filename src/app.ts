import express from 'express';
import morgan from 'morgan'
import { fileUploadRouter } from './api/fileUploadrouter';


const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use('/',fileUploadRouter)



export default app