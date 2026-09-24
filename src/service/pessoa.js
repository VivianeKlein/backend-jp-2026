import Pessoa from '../model/pessoa.js'

class ServicePessoa {
    
    Buscar() {
        return Pessoa.Buscar()
    }

    BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("favor informar um id valido.")
        }
        return Pessoa.BuscarUm(id)
    }

    Criar(nome) {
        if(!nome) {
            throw new Error("favor informar um nome valido.")
        }

        Pessoa.Criar(nome)
    }

    Alterar(id, nome) {
        if(!id || isNaN(id) || !nome) {
            throw new Error("favor informar um id e nome validos.")
        }

        Pessoa.Alterar(id, nome)
    }

    Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error("favor informar um id valido.")
        }

        Pessoa.Deletar(id)
    }
}

export default new ServicePessoa()