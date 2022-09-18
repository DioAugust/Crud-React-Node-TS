import { Button, Modal, Form } from "react-bootstrap";

export default function CadastrarFuncionario(props: any) {
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
                <Form className=" row text-center ">
                    <Form.Group className="col-md-6 offset-md-3">
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control type="text" name="name" />
                    </Form.Group>

                    <Form.Group className="col-md-6 offset-md-3">
                        <Form.Label>Sobrenome:</Form.Label>
                        <Form.Control type="text" name="sobrenome" />
                    </Form.Group>

                    <Form.Group className="col-md-6 offset-md-3">
                        <Form.Label>Cargo:</Form.Label>
                        <Form.Control type="text" name="Cargo" />
                    </Form.Group>

                    <Form.Group className="col-md-6 offset-md-3">
                        <Form.Label>Data de nascimento:</Form.Label>
                        <Form.Control type="date" name="dataNasci" />
                    </Form.Group>

                    <Form.Group className="col-md-6 offset-md-3">
                        <Form.Label>Salario:</Form.Label>
                        <Form.Control type="text" name="salario" />
                    </Form.Group>

                    <Button type="submit" value="Submit" className="btn btn-primary col-md-6 offset-md-3 mt-4">Cadastrar</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )

}