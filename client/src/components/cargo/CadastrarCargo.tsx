import { Button, Modal, Form } from "react-bootstrap";

export default function CadastrarCargo(props: any) {
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
                        <Form.Label>Cargo: </Form.Label>
                        <Form.Control type="text" name="name" />
                    </Form.Group>
                    <Form.Group className="col-md-6 offset-md-3">
                        <Form.Label>Descricao: </Form.Label>
                        <Form.Control type="text" name="description" />
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