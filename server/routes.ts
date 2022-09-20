import express from 'express';
import CargoOp from './src/operations/CargoOp';
import funcionarioOp from './src/operations/funcionarioOp';
import { Request, Response } from 'express';

const router = express.Router();

// Criar
router.post('/funcionarios', function (req: Request, res: Response) {
    funcionarioOp.create(req.body)
        .then(() => {
            res.status(201)
            res.send('Funcionario cadastrado')
        })
        .catch((err) => {
            console.log(err)
            res.send('Error')
        })
})
router.post('/cargos', function (req: Request, res: Response) {
    CargoOp.create(req.body)
        .then(() => {
            res.status(201)
            res.send('Cargo cadastrado')
        })
        .catch(err => {
            console.log(err)
            res.send('Error')
        })
})

// Editar
router.put('/funcionarios', function (req: Request, res: Response) {
    funcionarioOp.editar(req.body)
        .then(() => {
            res.status(204)
            res.send('Funcionario editado')
        })
        .catch((err) => {
            console.log(err)
        })
})


// Listar
router.get('/funcionarios', function (req: Request, res: Response) {
    funcionarioOp.list()
        .then(([rows]) => {
            return res.send(rows)
        })
        .catch((err) => {
            return console.log(err)
        })
})

router.post('/funcionarios/unique', function (req: Request, res: Response) {
    funcionarioOp.unique(req.body.idFuncionario)
        .then(([rows]) => {
            return res.send(rows)
        })
        .catch((err) => {
            return console.log(err)
        })
})


// Delete
router.delete('/funcionarios', function (req: Request, res: Response) {
    const { idFuncionario } = req.body
    funcionarioOp.delete(idFuncionario)
        .then(() => {
            res.status(204)
            res.send('Deletado')
        }).catch((err) => {
            console.log(err)
        })
})

export { router }