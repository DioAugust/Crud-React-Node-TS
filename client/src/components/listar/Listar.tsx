import Cadastrar from "../funcionaros/CadastrarFuncionario";
import Header from "./Header";
import Table from "./Table";

export default function Listar() {
    return (
        <div className="container">
            <Header />
            <div className="row">
                <Table />
            </div>
            <Cadastrar/>
        </div>
    )
}