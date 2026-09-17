import ServiceExercicio from '../service/exercicio.js'

class ControllerExercicio {
    Somar(req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2
            const soma = ServiceExercicio.Somar(num1, num2)
            res.send({ soma })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    Salario(req, res) {
        const valorhora = req.body.valorhora
        const horastrabalhadas = req.body.horastrabalhadas
        res.send({ Salario: valorhora * horastrabalhadas })
    }

    Pesomedio(req, res) {
        const peso1 = req.body.peso1
        const peso2 = req.body.peso2
        const peso3 = req.body.peso3
        const peso4 = req.body.peso4
        const peso5 = req.body.peso5
        const resultado = (peso1 + peso2 + peso3 + peso4 + peso5) / 5
        res.send({ 'peso medio': resultado })
    }

    Temperatura(req, res) {
        const celsius = req.body.celsius
        const resultado = (celsius * 9 + 160) / 5
        res.send({ 'temperatura em fahrenheit': resultado })
    }

}

export default new ControllerExercicio()