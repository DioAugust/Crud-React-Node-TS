import { useState } from "react"
import CadastrarCargo from "../cargo/CadastrarCargo";
import CadastrarFuncionario from "../funcionaros/CadastrarFuncionario";

export default function Header() {
    const [modalShowCargo, setModalShowCargo] = useState(false);
    const [modalShowFuncionario, setModalShowFuncionario] = useState(false);


    return (
        <nav className="navbar navbar-light">
            <h1 className="col-5">Listagem de Funcionarios</h1>
            <button type="button" onClick={() => {setModalShowFuncionario(true)}} className="col-2 btn btn-primary">funcionário <i className="bi bi-plus-square"></i></button>
            <button type="button" onClick={() => {setModalShowCargo(true)}} className="col-2 btn btn-primary">cargo <i className="bi bi-plus-square"></i></button>

            <CadastrarFuncionario 
            show={modalShowFuncionario}
            onHide={() => setModalShowFuncionario(false)}/>

            <CadastrarCargo
            show={modalShowCargo}
            onHide={() => setModalShowCargo(false)}/>
        </nav>
    )
}