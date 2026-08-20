import express from 'express' // TYPE MODULE
// const express = require("express") // TYPE COMMON JS

// inicializando o express = new
const app = express()
app.use(express.json()) // para receber dados no body da requisição

// () = 99% casos é função de callback.
// {} = objeto literal.


// EXERCICIO 1:
app.get("/api/somar", (req, res) => {
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
    res.send({resultado: num1 + num2 })
})

app.post("/api/somar", (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2
    res.send({resultado: num1 + num2 })
})


// EXERCICIO 2:
app.get("/api/salario/:valor/:horas", (req, res) => {
    const valorhora = Number(req.params.valor)
    const horastrabalhadas = Number(req.params.horas)
    res.send({Salario: valorhora * horastrabalhadas })
})

app.post("/api/salario", (req, res) => {
    const valorhora = req.body.valor
    const horastrabalhadas = req.body.horas
    res.send({Salario: valorhora * horastrabalhadas })
})


// EXERCICIO 3:
app.get("/api/pesomedio/:peso1/:peso2/:peso3/:peso4", (req, res) => {
    const peso1 = Number(req.params.peso1)
    const peso2 = Number(req.params.peso2)
    const peso3 = Number(req.params.peso3)
    const peso4 = Number(req.params.peso4)
    res.send({ 'peso medio': (peso1 + peso2 + peso3 + peso4) / 4 })
})

app.post("/api/pesomedio", (req, res) => {
    const peso1 = req.body.peso1
    const peso2 = req.body.peso2
    const peso3 = req.body.peso3
    const peso4 = req.body.peso4
    const peso5 = req.body.peso5
    const resultado = (peso1 + peso2 + peso3 + peso4 + peso5) / 5
    res.send({'peso medio': resultado })
})


// EXERCICIO 4:
app.get("/api/temperatura/:celsius", (req, res) => {
    const celsius = Number(req.params.celsius)
    const resultado = (celsius * 9 + 160) / 5
    res.send({ 'temperatura em fahrenheit': resultado })
})

app.post("/api/temperatura", (req, res) => {
    const celsius = req.body.celsius
    const resultado = (celsius * 9 + 160) / 5
    res.send({ 'temperatura em fahrenheit': resultado })
})


// EXERCICIO 5:
app.get("/api/quilometragem/:milhas", (req, res) => {
    const milhas = Number(req.params.milhas)
    const resultado = milhas * 1.60934
    res.send({ 'quilometros': resultado })
})

app.post("/api/quilometragem", (req, res) => {
    const milhas = Number(req.body.milhas)
    const resultado = milhas * 1.60934
    res.send({ 'quilometros': resultado })
})


// EXERCICIO 6:
app.get("/api/duracao/:segundos", (req, res) => {
    const segundos = Number(req.params.segundos)
    const horas = Math.floor(segundos / 3600)
    const minutos = Math.floor((segundos % 3600) / 60)
    res.send({ 'horas': horas, 'minutos': minutos, 'segundos': segundos % 60 })
})

app.post("/api/duracao", (req, res) => {
    const horas = Math.floor(req.body.segundos / 3600)
    const minutos = Math.floor((req.body.segundos % 3600) / 60)
    const segundos = req.body.segundos % 60
    res.send({ 'horas': horas, 'minutos': minutos, 'segundos': segundos })
})


// EXERCICIO 7:
app.get("/api/metros/:quilometros", (req, res) => {
    const quilometros = Number(req.params.quilometros)
    const resultado = quilometros * 1000
    res.send({ 'metros': resultado })
})

app.post("/api/metros", (req, res) => {
    const quilometros = Number(req.body.quilometros)
    const resultado = quilometros * 1000
    res.send({ 'metros': resultado })
})


// EXERCICIO 8:
app.get("/api/tabuada/:numero", (req, res) => {
    const numero = Number(req.params.numero)
    const resultado = []

    for (let i = 1; i <= 10; i++) {
        resultado.push(numero + " X " + i + " = " + (numero * i))
    }
    res.send({ 'tabuada': resultado })
})

app.post("/api/tabuada", (req, res) => {
    const numero = Number(req.body.numero)
    const resultado = []

    for (let i = 1; i <= 10; i++) {
        resultado.push(numero + " X " + i + " = " + (numero * i))
    }
    res.send({ 'tabuada': resultado })
})


// DESAFIO 0:
app.get("/api/desafioidade/:anos", (req, res) => {
    const anos = Number(req.params.anos)
    const meses = anos * 12
    const dias = anos * 365
    res.send({ 'meses': meses, 'dias': dias })
})

app.post("/api/desafioidade", (req, res) => {
    const anos = Number(req.body.anos)
    const meses = anos * 12
    const dias = anos * 365
    res.send({ 'meses': meses, 'dias': dias })
})


// DESAFIO 1:
app.get("/api/trocavalores/:valor1/:valor2", (req, res) => {
    let valor1 = Number(req.params.valor1)
    let valor2 = Number(req.params.valor2)
    const original1 = valor1
    const original2 = valor2
    const temp = valor1
    valor1 = valor2
    valor2 = temp
    res.send({antes: {'valor1': original1, 'valor2': original2}, 
        depois: {'valor1': valor1, 'valor2': valor2}})
})

app.post("/api/trocavalores", (req, res) => {
    let valor1 = Number(req.body.valor1)
    let valor2 = Number(req.body.valor2)
    const original1 = valor1
    const original2 = valor2
    const temp = valor1
    valor1 = valor2
    valor2 = temp
    res.send({antes: {'valor1': original1, 'valor2': original2}, 
        depois: {'valor1': valor1, 'valor2': valor2}})
})


// DESAFIO 2:
app.get("/api/numeromaior/:num1/:num2", (req, res) => {
    const num1 = Number(req.params.num1)
    const num2 = Number(req.params.num2)
    const maior = num1 > num2 ? num1 : num2
    res.send({ 'maior': maior })
})

app.post("/api/numeromaior", (req, res) => {
    const num1 = Number(req.body.num1)
    const num2 = Number(req.body.num2)
    const maior = num1 > num2 ? num1 : num2
    res.send({ 'maior': maior })
})


app.listen(3000, () => {
    console.log("Servidor em http://localhost:3000")
})