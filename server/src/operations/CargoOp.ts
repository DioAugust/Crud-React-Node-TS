import bd  from '../database/config'

class CargoOp {
    async create(cargo) {
        return bd.promise().execute("INSERT INTO cargos (nomeCargo, descricaoCargo) VALUES (?, ?)", 
        [cargo.nomeCargo, cargo.descricaoCargo])
    }
}

export default new CargoOp;