import { Button, Modal } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import React, { useState } from "react"
import axios from "axios"
import { useEffect } from 'react';

export default function EditarFuncionario(props: any) {
    const [funcionarios, setFuncionarios] = useState("placeholder")

    async function ChamarEditado() {
      let response = await axios({
        method: "POST",
        url: 'http://localhost:3000/funcionarios/unique',
        data: {
            idFuncionario: props.value.idFuncionario
        }
    }).then((response) => response)
        console.log(response.data[0])
        
    }
    if (funcionarios === "placeholder" ) {
        ChamarEditado()
    }
    
   
    

    
    

    
    // const atualizarSobrenome = (event: any) => {
    //     event.preventDefault();
    //     const { name, value } = event.target

    //     setFuncionarios({
    //         nome: funcionarios.nome,
    //         sobrenome: value,
    //         cargo: funcionarios.cargo,
    //         nascimento: funcionarios.nascimento,
    //         salario: funcionarios.salario
    //     })
    // }
    // const atualizarCargo = (event: any) => {
    //     event.preventDefault();
    //     const { name, value } = event.target

    //     setFuncionarios({
    //         nome: funcionarios.nome,
    //         sobrenome: funcionarios.sobrenome,
    //         cargo: value,
    //         nascimento: funcionarios.nascimento,
    //         salario: funcionarios.salario
    //     })
    // }
    // const atualizarNascimento = (event: any) => {
    //     event.preventDefault();
    //     const { name, value } = event.target

    //     setFuncionarios({
    //         nome: funcionarios.nome,
    //         sobrenome: funcionarios.sobrenome,
    //         cargo: funcionarios.cargo,
    //         nascimento: value,
    //         salario: funcionarios.salario
    //     })
    // }
    // const atualizarSalario = (event: any) => {
    //     event.preventDefault();
    //     const { name, value } = event.target

    //     setFuncionarios({
    //         nome: funcionarios.nome,
    //         sobrenome: funcionarios.sobrenome,
    //         cargo: funcionarios.cargo,
    //         nascimento: funcionarios.nascimento,
    //         salario: value
    //     })
    // }

    function Editar() {
        // let nome = funcionarios.nome ? funcionarios.nome : props.values.nome
        // let sobrenome = funcionarios.sobrenome ? funcionarios.sobrenome : props.values.sobrenome
        // let cargo = funcionarios.cargo ? funcionarios.cargo : props.values.cargo
        // let nascimento = funcionarios.nascimento ? funcionarios.nascimento : props.values.nascimento
        // let salario = funcionarios.salario ? funcionarios.salario : props.values.salario
        // let id = props.values.idFuncionario
        axios({
            method: 'PUT',
            url: 'http://localhost:3000/funcionarios',
            data: {
                    // nome: nome,
                    // sobrenome: sobrenome,
                    // cargoId: cargo,
                    // nascimento: nascimento,
                    // salario: salario,
                    // idFuncionario: id
            }
        })
    }
    // console.log(props.values)

    // let nome = ''
    // let sobrenome = ''
    // let cargo = ''
    // let nascimento = ''
    // let salario = ''


    // if (props.edicao) {
    //     nome = props.values.nome
    // } else {
    //     nome = funcionarios.nome
    // }

    // if (props.edicao) {
    //     sobrenome = props.values.sobrenome
    // } else {
    //     sobrenome = funcionarios.sobrenome
    // }

    // if (props.edicao) {
    //     cargo = props.values.cargoId
    // } else {
    //     cargo = funcionarios.cargo
    // }

    // if (props.edicao) {
    //     nascimento = props.values.nascimento.slice(0, 10)
    // } else {
    //     nascimento = funcionarios.nascimento
    // }

    // if (props.edicao) {
    //     salario = props.values.salario
    // } else {
    //     salario = funcionarios.salario
    // } onChange={atualizarNome} onChange={atualizarSobrenome} onChange={atualizarNascimento} onChange={atualizarCargo} onChange={atualizarSalario}

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
                <Form onSubmit={ Editar } className=" row text-center ">
                    <Form.Group className="col-md-6 offset-md-3">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control type="text" name="nome"  />
                    </Form.Group>

                    <Form.Group className="col-md-6 offset-md-3">
                        <Form.Label>Sobrenome:</Form.Label>
                        <Form.Control type="text" name="sobrenome"  />
                    </Form.Group>

                    <Form.Group className="col-md-6 offset-md-3">
                        <Form.Label>Cargo:</Form.Label>
                        <Form.Control type="text" name="cargo" />
                    </Form.Group>

                    <Form.Group className="col-md-6 offset-md-3">
                        <Form.Label>Data de nascimento:</Form.Label>
                        <Form.Control type="date" name="nascimento" required  />
                    </Form.Group>

                    <Form.Group className="col-md-6 offset-md-3">
                        <Form.Label>Salario:</Form.Label>
                        <Form.Control type="text" name="salario" />
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