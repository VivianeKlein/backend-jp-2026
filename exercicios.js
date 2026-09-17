import express from 'express' // TYPE MODULE
// const express = require("express") // TYPE COMMON JS
// inicializando o express = new

import router from '/src/router/exercicio.js'

const app = express()
app.use(express.json()) 

app.use(router)


app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})