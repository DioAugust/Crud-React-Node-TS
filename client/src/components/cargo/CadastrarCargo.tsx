import axios from "axios";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default function CadastrarCargo(props: any) {
    const [cargo, setCargo] = useState("")
    const [descricao, setDescricao] = useState("")
    
    const handleCargo = (e: any) => {
        setCargo(e.target.value)
    }
    const handleDescricao = (e: any) => {
        setDescricao(e.target.value)
    }
    

    function Registrar() {
        axios({
            method: 'POST',
            url: 'http://localhost:3000/cargos',
            data: {
                nomeCargo: cargo,
                descricaoCargo: descricao
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
                    Cadastro de cargo
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Form className=" row text-center " onSubmit={Registrar}>
                    <Form.Group className="col-md-6 offset-md-3">
                        <Form.Label>Cargo </Form.Label>
                        <Form.Control type="text" name="cargo" value={cargo} onChange={handleCargo}/>
                    </Form.Group>
                    <Form.Group className="col-md-6 offset-md-3">
                        <Form.Label>Descricao </Form.Label>
                        <Form.Control type="text" name="description" value={descricao} onChange={handleDescricao}/>
                    </Form.Group>
                    <Button type="submit" value="Submit" className="btn btn-primary col-md-6 offset-md-3 mt-4">Cadastrar</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    )

}