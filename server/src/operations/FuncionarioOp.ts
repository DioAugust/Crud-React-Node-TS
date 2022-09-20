import bd  from '../database/config'

class FuncionarioOp {
    async list() {
        return bd.promise().query('select nome, sobrenome, nascimento, salario, nomeCargo, idFuncionario from funcionarios, cargos where cargoId = idCargo')
    }
    async editar(funcionario) {
        return bd.promise().execute('UPDATE funcionarios set nome=?, sobrenome=?, cargoId=?, nascimento=?, salario=? where idFuncionario= ?',
        [funcionario.nome, funcionario.sobrenome, funcionario.cargoId, funcionario.nascimento, funcionario.salario, funcionario.idFuncionario])
    }
    async unique(id) {
        return bd.promise().query('select * from funcionarios where idFuncionario=?', [id])
    }
    async create(funcionario) {
        return bd.promise().execute("INSERT INTO funcionarios (nome, sobrenome, cargoId, nascimento, salario) VALUES (?, ?, ?, ?, ?)", 
        [funcionario.nome, funcionario.sobrenome, funcionario.cargoId, funcionario.nascimento, funcionario.salario])
        
    }
    async delete(id) {
        return bd.promise().execute("DELETE FROM funcionarios where idFuncionario=?", [id])
    }
}

export default new FuncionarioOp;