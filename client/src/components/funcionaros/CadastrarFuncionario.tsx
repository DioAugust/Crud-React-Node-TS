import { Button, Modal } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import  { useState } from "react"
import axios from "axios"


export default function CadastrarFuncionario(props: any) {
    const [nomeFuncionario, setNome] = useState("")
    const [sobrenomeFuncionario, setSobrenome] = useState("")
    const [cargoIdFuncionario, setCargo] = useState("")
    const [nascimentoFuncionario, setNascimento] = useState("")
    const [salarioFuncionario, setSalario] = useState("")

    const handleSobrenome = (e: any) => {
        setSobrenome(e.target.value)
    }
    const handleNome = (e: any) => {
        setNome(e.target.value)
    }
    const handleCargo = (e: any) => {
        setCargo(e.target.value)
    }
    const handleNascimento = (e: any) => {
        setNascimento(e.target.value.slice(0, 10))
    }
    const handleSalario = (e: any) => {
        setSalario(e.target.value)
    }

    function Registrar() {
        axios({
            method: 'POST',
            url: 'http://localhost:3000/funcionarios',
            data: {
                nome: nomeFuncionario,
                sobrenome: sobrenomeFuncionario,
                cargoId: cargoIdFuncionario,
                nascimento: nascimentoFuncionario,
                salario: salarioFuncionario
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
                    Cadastro de funcionarios
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Form onSubmit={ Registrar } className=" row text-center ">
                    <Form.Group className="col-md-6 offset-md-3">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="nome" 
                        required 
                        value={nomeFuncionario} 
                        onChange={handleNome} />
                    </Form.Group>

                    <Form.Group className="col-md-6 offset-md-3">
                        <Form.Label>Sobrenome</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="sobrenome" 
                        required value={sobrenomeFuncionario} 
                        onChange={handleSobrenome} />
                    </Form.Group>

                    <Form.Group className="col-md-6 offset-md-3">
                        <Form.Label>Cargo</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="cargo" 
                        required 
                        value={cargoIdFuncionario} 
                        onChange={handleCargo} />
                    </Form.Group>

                    <Form.Group className="col-md-6 offset-md-3">
                        <Form.Label>Data de nascimento</Form.Label>
                        <Form.Control 
                        type="date" 
                        name="nascimento" 
                        required 
                        value={nascimentoFuncionario} 
                        onChange={handleNascimento} />
                    </Form.Group>

                    <Form.Group className="col-md-6 offset-md-3">
                        <Form.Label>Salario</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="salario" 
                        required 
                        value={salarioFuncionario} 
                        onChange={handleSalario} />
                    </Form.Group>

                    <Button 
                    type="submit" 
                    value="Submit" 
                    className="btn btn-primary col-md-6 offset-md-3 mt-4">Cadastrar</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
        
            </Modal.Footer>
        </Modal >
    )

}