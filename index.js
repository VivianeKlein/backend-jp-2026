import express from 'express' // TYPE MODULE
// const express = require("express") // TYPE COMMON JS

// inicializando o express = new
const app = express ()

// rota
app.get("/api/somar", (req, res) => {
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
    res.send({mensagem: num1 + num2})
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})