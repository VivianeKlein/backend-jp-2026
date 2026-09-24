import ServicePessoa from '../service/pessoa.js'

class ControllerPessoa {

    Buscar(req, res) {
        try {
            const nomes = ServicePessoa.Buscar()
            res.send({ nomes })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    BuscarUm(req, res) {
        try {
            const id = req.params.id
            const nome = ServicePessoa.BuscarUm(id)
            res.send({ nome })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    Criar(req, res) {
        try {
            const nome = req.body.nome
            ServicePessoa.Criar(nome)
            res.send({ message: "Pessoa criada com sucesso." })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    Alterar(req, res) {
        try {
            const id = req.params.id
            const nome = req.body.nome
            ServicePessoa.Alterar(id, nome)
            res.send({ message: "Pessoa alterada com sucesso." })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    Deletar(req, res) {
        try {
            const id = req.params.id
            ServicePessoa.Deletar(id)
            res.send({ message: "Pessoa deletada com sucesso." })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
}

export default new ControllerPessoa()