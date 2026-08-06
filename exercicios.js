import express from 'express' // TYPE MODULE
// const express = require("express") // TYPE COMMON JS

// inicializando o express = new
const app = express()

// () = 99% casos é função de callback.
// {} = objeto literal.

// exercicio 1:
app.get("/api/somar", (req, res) => {
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
    res.send({ 'resultado': num1 + num2 })
})

// exercicio 2:
app.get("/api/salario/:valor/:horas", (req, res) => {
    const valorhora = Number(req.params.valor)
    const horastrabalhadas = Number(req.params.horas)
    const resultado = valorhora * horastrabalhadas
    res.send({ 'Salario': resultado })
})

// exercicio 3:
app.get("/api/pesomedio/:peso1/:peso2/:peso3/:peso4/:peso5", (req, res) => {
    const peso1 = Number(req.params.peso1)
    const peso2 = Number(req.params.peso2)
    const peso3 = Number(req.params.peso3)
    const peso4 = Number(req.params.peso4)
    const peso5 = Number(req.params.peso5)
    const resultado = (peso1 + peso2 + peso3 + peso4 + peso5) / 5
    res.send({ 'peso medio': resultado })
})

// exercicio 4:
app.get("/api/temperatura/:celsius", (req, res) => {
    const celsius = Number(req.params.celsius)
    const resultado = (celsius * 9 / 5) + 32
    res.send({ 'temperatura em fahrenheit': resultado })
})

// exercicio 5:
app.get("/api/quilometragem/:milhas", (req, res) => {
    const milhas = Number(req.params.milhas)
    const resultado = milhas * 1.60934
    res.send({ 'quilometros': resultado })
})

// exercicio 6:
app.get("/api/duracao/:segundos", (req, res) => {
    const horas = Math.floor(req.params.segundos / 3600)
    const minutos = Math.floor((req.params.segundos % 3600) / 60)
    const segundos = req.params.segundos % 60
    res.send({ 'horas': horas, 'minutos': minutos, 'segundos': segundos })
})

// exercicio 7:
app.get("/api/metros/:quilometros", (req, res) => {
    const quilometros = Number(req.params.quilometros)
    const resultado = quilometros * 1000
    res.send({ 'metros': resultado })
})

// exercicio 8:
app.get("/api/tabuada/:numero", (req, res) => {
    const numero = Number(req.params.numero)
    const resultado = []

    for (let i = 1; i <= 10; i++) {
        resultado.push(numero + " X " + i + " = " + (numero * i))
    }
    res.send({ 'tabuada': resultado })
})

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})