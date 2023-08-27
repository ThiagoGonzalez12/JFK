import http from 'node:http'
import express from "express";

const app = express()
const server = http.createServer(app)
const port = 3000

server.listen(port, () =>{
    console.log(`Servidor inicializado en http://localhost:${port}`)
})

app.use(express.static('public'));