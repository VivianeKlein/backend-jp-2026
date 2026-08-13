import express from 'express' // TYPE MODULE
// const express = require("express") // TYPE COMMON JS

// inicializando o express = new
const app = express()
app.use(express.json()) // para receber dados no body da requisição

// () = 99% casos é função de callback.
// {} = objeto literal.

// exercicio 1:
app.post("/api/somar", (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2
    res.send({resultado: num1 + num2 })
})

// exercicio 2:
app.post("/api/salario", (req, res) => {
    const valorhora = req.body.valor
    const horastrabalhadas = req.body.horas
    res.send({Salario: valorhora * horastrabalhadas })
})

// exercicio 3:
app.post("/api/pesomedio", (req, res) => {
    const peso1 = req.body.peso1
    const peso2 = req.body.peso2
    const peso3 = req.body.peso3
    const peso4 = req.body.peso4
    const peso5 = req.body.peso5
    const resultado = (peso1 + peso2 + peso3 + peso4 + peso5) / 5
    res.send({'peso medio': resultado })
})

// exercicio 4:
app.post("/api/temperatura", (req, res) => {
    const celsius = req.body.celsius
    const resultado = (celsius * 9 / 5) + 32
    res.send({ 'temperatura em fahrenheit': resultado })
})

// exercicio 5:
app.post("/api/quilometragem/:milhas", (req, res) => {
    const milhas = Number(req.body.milhas)
    const resultado = milhas * 1.60934
    res.send({ 'quilometros': resultado })
})

// exercicio 6:
app.post("/api/duracao/:segundos", (req, res) => {
    const horas = Math.floor(req.body.segundos / 3600)
    const minutos = Math.floor((req.body.segundos % 3600) / 60)
    const segundos = req.body.segundos % 60
    res.send({ 'horas': horas, 'minutos': minutos, 'segundos': segundos })
})

// exercicio 7:
app.post("/api/metros/:quilometros", (req, res) => {
    const quilometros = Number(req.body.quilometros)
    const resultado = quilometros * 1000
    res.send({ 'metros': resultado })
})

// exercicio 8:
app.post("/api/tabuada/:numero", (req, res) => {
    const numero = Number(req.body.numero)
    const resultado = []

    for (let i = 1; i <= 10; i++) {
        resultado.push(numero + " X " + i + " = " + (numero * i))
    }
    res.send({ 'tabuada': resultado })
})

app.listen(3000, () => {
    console.log("Servidor em http://localhost:3000")
})