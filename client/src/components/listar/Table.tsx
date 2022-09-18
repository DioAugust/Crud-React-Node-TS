export default function Table() {
    return (
        <table className="table table-striped">
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
                        <tr>
                            <th scope="row"> teste </th>
                            <td>sd</td>
                            <td>sd</td>
                            <td>sd </td>
                            <td>sd </td>
                            <td>sd </td>
                            <td>
                                <div className="row">
                                    <form className="col-auto" action="" method="post">
                                        <input type="hidden" name="id" value=''></input>
                                        <button type="submit" className="btn btn-danger"><i className="bi bi-trash"></i></button>
                                    </form>
                                    <a className="col-auto btn btn-info" href='' ><i className="bi bi-pencil-square"></i></a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
    )
}