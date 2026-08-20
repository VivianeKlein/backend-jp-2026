import express from 'express' // TYPE MODULE
// const express = require("express") // TYPE COMMON JS

// inicializando o express = new
const app = express()
app.use(express.json()) // para receber dados no body da requisição

// () = 99% casos é função de callback.
// {} = objeto literal.


// EXERCICIO 9:
app.get("/api/nota/:nota1/:nota2/:nota3", (req, res) => {
    const nota1 = Number(req.params.nota1)
    const nota2 = Number(req.params.nota2)
    const nota3 = Number(req.params.nota3)
    const media = (nota1 + nota2 + nota3) / 3
    if (media >= 7) {
        res.send({ media, 'situacao': 'Aprovado' })
    }   else if (media >= 5) {
        res.send({ media, 'situacao': 'Recuperação' })
    } else {
        res.send({ media, 'situacao': 'Reprovado' })
    }
})

app.post("/api/nota", (req, res) => {
    const nota1 = req.body.nota1
    const nota2 = req.body.nota2
    const nota3 = req.body.nota3
    const media = (nota1 + nota2 + nota3) / 3
    if (media >= 7) {
        res.send({ media, 'situacao': 'Aprovado' })
    }
    else if (media >= 5) {
        res.send({ media, 'situacao': 'Recuperação' })
    }
    else {res.send({ media, 'situacao': 'Reprovado' })
    }
})


// EXERCICIO 10:
app.get("/api/pesoideal/:altura/:sexo", (req, res) => {
    const altura = Number(req.params.altura)
    const sexo = req.params.sexo
    let pesoideal

    if (sexo === "M" || sexo === "m") {
        pesoideal = (72.7 * altura) - 58
    } else if (sexo === "F" || sexo === "f") {
        pesoideal = (62.1 * altura) - 44.7
    }
    res.send({ altura, sexo, pesoideal })
})

app.post("/api/pesoideal", (req, res) => {
    const altura = req.body.altura
    const sexo = req.body.sexo
    let pesoideal
    if (sexo === "M" || sexo === "m") {
        pesoideal = (72.7 * altura) - 58
    } else if (sexo === "F" || sexo === "f") {
        pesoideal = (62.1 * altura) - 44.7
    }
    res.send({ altura, sexo, pesoideal })
})


app.listen(3000, () => {
    console.log("Servidor em http://localhost:3000")
})