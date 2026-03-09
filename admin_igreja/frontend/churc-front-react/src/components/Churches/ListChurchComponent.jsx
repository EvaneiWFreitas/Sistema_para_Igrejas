import React, { useEffect, useState } from 'react'
import { getAllChurches } from '../../services/ChurchService';
import { useNavigate } from 'react-router-dom';

const ListChurchComponent = () => {

    const [churches, setChurches] = useState([]);

    const navigator = useNavigate([]);

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

    //FUNÇÃO PARA ADICIONAR UMA NOVA IGREJA(function addNewChurch())
    function addNewChurch(){
        navigator("/add-churches");
    }

    //FUNÇÃO PARA EDITAR IGREJA(function updatChurch() )
    function updateChurch(id){
        navigator(`/edit-church/${id}`);
    }


  return (
    <div className="container">
        <br></br>
        <h2 className="text-center text-success">Listar Igrejas Cadastradas:</h2>
        <br />
        <button className="btn btn-success" onClick={addNewChurch}>
          Cadastrar Igreja
        </button>
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
                    <th>Ações:</th>
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
                        <td>
                            <button 
                            onClick={() => updateChurch(church._id)} className='btn btn-info'>
                                Editar
                            </button>
                        </td>   
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ListChurchComponent