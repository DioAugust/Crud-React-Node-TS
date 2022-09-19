import express from 'express';
import CargoOp from './src/operations/CargoOp';
import funcionarioOp from './src/operations/funcionarioOp';
import { Request, Response } from 'express';

const router = express.Router();

// Criar
router.post('/funcionarios', function (req: Request, res: Response) {
    console.log(req.body);
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
            res.send('Funcionario editado')
        })
        .catch((err) => {
            console.log(err)
        })
})
router.put('/cargos', function (req: Request, res: Response) {
    CargoOp.editar(req.body)
        .then(() => {
            return res.send('Cargo editado')
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
    console.log(req.body)
    funcionarioOp.unique(req.body.idFuncionario)
        .then(([rows]) => {
            return res.send(rows)
        })
        .catch((err) => {
            return console.log(err)
        })
})

router.get('/cargos/unique', function (req: Request, res: Response) {
    CargoOp.unique(req.body.idCargo)
        .then(([rows]) => {
            return res.send(rows)
        })
        .catch((err) => {
            return console.log(err)
        })
})

router.get('/cargos', function (req: Request, res: Response) {
    CargoOp.list()
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
    console.log(idFuncionario)
    funcionarioOp.delete(idFuncionario)
        .then(() => {
            return res.send('Deletado')
        }).catch((err) => {
            return console.log(err)
        })
})
router.delete('/cargos', function (req: Request, res: Response) {
    CargoOp.delete(req.params)
        .then(() => {
            res.send('Deletado')
            return res.redirect('http://localhost:3000/funcionarios')
        })
        .catch((err) => {
            res.send('Cannot delete or update a parent row')
            return console.log(err)
        })
})

export { router }