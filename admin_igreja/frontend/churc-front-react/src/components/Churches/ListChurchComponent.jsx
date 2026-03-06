import React, { useEffect, useState } from 'react'
import { getAllChurches } from '../../services/ChurchService';

const ListChurchComponent = () => {

    const [churches, setChurches] = useState([]);

    function listofChurches(){
        getAllChurches().then((response)=>{
            //console.log(response.data);
            setChurches(response.data);
        })
        .catch((error)=>{
            console.error(error);
        });
    }
    useEffect(()=>{
        listofChurches();
    },[]);

  return (
    <div className="container">
        <br></br>
        <h2 className="text-center text-success">Lista das Igrejas</h2>
        <br />
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Nome:</th>
                    <th>Tipo:</th>
                    <th>Responsável:</th>
                    <th>Endereço:</th>
                    <th>Cidade:</th>
                    <th>Bairro:</th>
                    <th>Estado:</th>
                    <th>Telefone:</th>
                    <th>E-mail:</th>
                </tr>
            </thead>
            <tbody>
                {churches.map((church)=>(
                    <tr key={church._id}>
                        <td>{church.name}</td>
                        <td>{church.type}</td>
                        <td>{church.responsible}</td>
                        <td>{church.address}</td>
                        <td>{church.city}</td>
                        <td>{church.bairro}</td>
                        <td>{church.state}</td>
                        <td>{church.phone}</td>
                        <td>{church.email}</td>   
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ListChurchComponent