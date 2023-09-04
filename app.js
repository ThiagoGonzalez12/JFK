import { dbConnect } from './config/mongo.js';
import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import router from './routes/index.js'
import pdfRoutes from './routes/pdfRoutes.js';

dotenv.config()

const app = express()

app.use(cors())

app.use(express.json())

app.use(express.static("storage"))
app.use(express.static("public"))
app.use('/pdfs', pdfRoutes);

const port = process.env.PORT || 3000

app.use(router)

app.listen(port, () =>{
    console.log(`Servidor inicializado en http://localhost:${port}`)
})

dbConnect()

// app.use(express.static('public'));