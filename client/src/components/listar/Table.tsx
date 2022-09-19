import axios from "axios";
import { useEffect, useState } from "react";
import CadastrarFuncionario from "../funcionaros/CadastrarFuncionario";

export default function Table() {
    const [funcionarios, setFuncionarios] = useState({
        nome: '',
        sobrenome: '',
        cargoId: '',
        nascimento: '',
        salario: '',
        idFuncionario: ''
    })

    const [estados, setEstados] = useState<any[]>([])
    const [modalShowFuncionario, setModalShowFuncionario] = useState(false);
    const [editar, setEditar] = useState<boolean>(false)
    

    function handleDelete(idFuncionario: number) {
        console.log (idFuncionario)
        axios({
            method: "DELETE",
            url: 'http://localhost:3000/funcionarios',
            data: {
                idFuncionario
            }
        })
    }
    function handleUpdate(idFuncionario: number) {
        console.log (idFuncionario)
        axios({
            method: "PUT",
            url: 'http://localhost:3000/funcionarios',
            data: {
                idFuncionario
            }
        })
    }

    function editarFuncionario(idFuncionario: number) {
        axios({
            method: "POST",
            url: 'http://localhost:3000/funcionarios/unique',
            data: {
                idFuncionario
            }
        })
        .then(response => {
            setFuncionarios({
                nome: response.data[0].nome,
                sobrenome: response.data[0].sobrenome,
                cargoId: response.data[0].cargoId,
                nascimento: response.data[0].nascimento,
                salario: response.data[0].salario,
                idFuncionario: response.data[0].idFuncionario
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        axios.get('http://localhost:3000/funcionarios').then(response => {
            setEstados(response.data)
        })
    }, []);
    
    return (
        <table className="table table-striped">

            <CadastrarFuncionario 
            show={modalShowFuncionario}
            onHide={() => setModalShowFuncionario(false)}
            values={funcionarios}
            edicao={editar}/>

            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Sobrenome</th>
                    <th scope="col">Cargo</th>
                    <th scope="col">Data de nascimento</th>
                    <th scope="col">Salário</th>
                    <th scope="col">Opcoes</th>
                </tr>
            </thead>
            <tbody>
                {
                estados.map((funcionario) =>
                    <tr>
                        <th scope="row"> {funcionario.idFuncionario} </th>
                        <td>{funcionario.nome}</td>
                        <td>{funcionario.sobrenome}</td>
                        <td>{funcionario.cargoId} </td>
                        <td>{funcionario.nascimento.slice(0, 10)} </td>
                        <td>{funcionario.salario} </td>
                        <td>
                            <div className="row">
                                <form className="col-auto">
                                    <input 
                                    type="hidden" 
                                    name="idFuncionario" ></input>
                                    <button  
                                    type="submit" 
                                    onClick={() => handleDelete(funcionario.idFuncionario)} 
                                    className="btn btn-danger"><i 
                                    className="bi bi-trash"></i></button>
                                </form>
                                    <button  
                                    onClick={() => {
                                        editarFuncionario(funcionario.idFuncionario), 
                                        setModalShowFuncionario(true), 
                                        setEditar(true)}}
                                    className="col-auto btn btn-info" ><i 
                                    className="bi bi-pencil-square"></i></button>
                            </div>
                        </td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    )
}