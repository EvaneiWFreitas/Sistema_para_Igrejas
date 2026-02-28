import React from 'react'

const ListIgrejasComponent = () => {
  return (
    <div className="container">
        <h2 className="text-center">Lista de Igrejas</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Id:</th>
                    <th>Tipo:</th>
                    <th>Responsável:</th>
                    <th>Endereço:</th>
                    <th>Cidade:</th>
                    <th>Bairro:</th>
                    <th>Estado:</th>
                    <th>Telefone:</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Congregação</td>
                    <td>José da Silva</td>
                    <td>Rua Dardo SN</td>
                    <td>São João de Meriti</td>
                    <td>Vilar dos Teles</td>
                    <td>RJ</td>
                    <td>21998786547</td>
                </tr>
            </tbody>
        </table>


    </div>
  )
}

export default ListIgrejasComponent