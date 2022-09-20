import { Button, Modal } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import  { useState } from "react"
import axios from "axios"


export default function CadastrarFuncionario(props: any) {
    const [funcionarios, setFuncionarios] = useState({
        nome: '',
        sobrenome: '',
        cargo: '',
        nascimento: '',
        salario: ''
    })

    const atualizarNome = (event: any) => {
        event.preventDefault();
        const { name, value } = event.target

        setFuncionarios({
            nome: value,
            sobrenome: funcionarios.sobrenome,
            cargo: funcionarios.cargo,
            nascimento: funcionarios.nascimento,
            salario: funcionarios.salario
        })
    }
    const atualizarSobrenome = (event: any) => {
        event.preventDefault();
        const { name, value } = event.target

        setFuncionarios({
            nome: funcionarios.nome,
            sobrenome: value,
            cargo: funcionarios.cargo,
            nascimento: funcionarios.nascimento,
            salario: funcionarios.salario
        })
    }
    const atualizarCargo = (event: any) => {
        event.preventDefault();
        const { name, value } = event.target

        setFuncionarios({
            nome: funcionarios.nome,
            sobrenome: funcionarios.sobrenome,
            cargo: value,
            nascimento: funcionarios.nascimento,
            salario: funcionarios.salario
        })
    }
    const atualizarNascimento = (event: any) => {
        event.preventDefault();
        const { name, value } = event.target

        setFuncionarios({
            nome: funcionarios.nome,
            sobrenome: funcionarios.sobrenome,
            cargo: funcionarios.cargo,
            nascimento: value,
            salario: funcionarios.salario
        })
    }
    const atualizarSalario = (event: any) => {
        event.preventDefault();
        const { name, value } = event.target

        setFuncionarios({
            nome: funcionarios.nome,
            sobrenome: funcionarios.sobrenome,
            cargo: funcionarios.cargo,
            nascimento: funcionarios.nascimento,
            salario: value
        })
    }



    function Registrar() {
        axios({
            method: 'POST',
            url: 'http://localhost:3000/funcionarios',
            data: {
                nome: funcionarios.nome,
                sobrenome: funcionarios.sobrenome,
                cargoId: funcionarios.cargo,
                nascimento: funcionarios.nascimento,
                salario: funcionarios.salario
            }
        })
    }

    

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Form onSubmit={ Registrar} className=" row text-center ">
                    <Form.Group className="col-md-6 offset-md-3">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control type="text" name="nome" value={funcionarios.nome} onChange={atualizarNome} />
                    </Form.Group>

                    <Form.Group className="col-md-6 offset-md-3">
                        <Form.Label>Sobrenome:</Form.Label>
                        <Form.Control type="text" name="sobrenome" value={funcionarios.sobrenome } onChange={atualizarSobrenome} />
                    </Form.Group>

                    <Form.Group className="col-md-6 offset-md-3">
                        <Form.Label>Cargo:</Form.Label>
                        <Form.Control type="text" name="cargo" value={funcionarios.cargo } onChange={atualizarCargo} />
                    </Form.Group>

                    <Form.Group className="col-md-6 offset-md-3">
                        <Form.Label>Data de nascimento:</Form.Label>
                        <Form.Control type="date" name="nascimento" required value={funcionarios.nascimento } onChange={atualizarNascimento} />
                    </Form.Group>

                    <Form.Group className="col-md-6 offset-md-3">
                        <Form.Label>Salario:</Form.Label>
                        <Form.Control type="text" name="salario" value={funcionarios.salario } onChange={atualizarSalario} />
                    </Form.Group>

                    <Button type="submit" value="Submit" className="btn btn-primary col-md-6 offset-md-3 mt-4">Cadastrar</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button>Close</Button>
            </Modal.Footer>
        </Modal >
    )

}