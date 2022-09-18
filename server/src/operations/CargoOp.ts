import { Request, Response } from "express";
import bd  from '../database/config'

class CargoOp {
    async list() {
        return bd.promise().query('select * from cargos')
    }
    async editar(cargo) {
        return bd.promise().execute('UPDATE cargos set nomeCargo=?, descricaoCargo=?  where idCargo=?',
        [cargo.nomeCargo, cargo.descricaoCargo, cargo.idCargo])
    }
    async unique(id) {
        return bd.promise().query('select * from cargos where idCargo=?', id)
    }
    async create(cargo) {
        return bd.promise().execute("INSERT INTO cargos (nomeCargo, descricaoCargo) VALUES (?, ?)", 
        [cargo.nomeCargo, cargo.descricaoCargo])
        
    }
    async delete(id) {
        return bd.promise().execute("DELETE FROM cargos where idCargo=?", [id])
    }
}

export default new CargoOp;