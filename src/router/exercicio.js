import express from "express"
import ControllerExercicio from '../controller/exercicio.js'
const router = express.Router()

// EXERCICIO 1:
router.get("/api/somar", (req, res) => {
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
    res.send({ resultado: num1 + num2 })
})

router.post("/api/somar", ControllerExercicio.Somar)


// EXERCICIO 2:
router.get("/api/salario/:valor/:horas", (req, res) => {
    const valorhora = Number(req.params.valor)
    const horastrabalhadas = Number(req.params.horas)
    res.send({ Salario: valorhora * horastrabalhadas })
})

router.post("/api/salario", ControllerExercicio.Salario)


// EXERCICIO 3:
router.get("/api/pesomedio/:peso1/:peso2/:peso3/:peso4", (req, res) => {
    const peso1 = Number(req.params.peso1)
    const peso2 = Number(req.params.peso2)
    const peso3 = Number(req.params.peso3)
    const peso4 = Number(req.params.peso4)
    res.send({ 'peso medio': (peso1 + peso2 + peso3 + peso4) / 4 })
})

router.post("/api/pesomedio", ControllerExercicio.Pesomedio)


// EXERCICIO 4:
router.get("/api/temperatura/:celsius", (req, res) => {
    const celsius = Number(req.params.celsius)
    const resultado = (celsius * 9 + 160) / 5
    res.send({ 'temperatura em fahrenheit': resultado })
})

router.post("/api/temperatura", ControllerExercicio.Temperatura)

