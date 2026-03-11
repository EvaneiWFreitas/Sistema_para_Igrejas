import React, { useEffect, useState } from "react";
import { getAllMembers } from "../../services/MemberService";
import { useNavigate } from "react-router-dom";

function ListMemberComponent() {
  //USANDO O USE STATE PARA PODER CARREGAR A LISTA DE  MEMBROS.
  const [members, setMembers] = useState([]);
  const navigator = useNavigate();
  /**
   * ESSA FUNÇÃO CHAMA getAllMembers() e
   * PEGA TODOS OS MEMBROS CADASTRADOS PARA MOSTRAR OS DADOS.
   */
  function listOfMembers() {
    getAllMembers()
      .then((response) => {
        setMembers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  //EXIBE OS MEMBROS CADASTRADOS.
  useEffect(() => {
    listOfMembers();
  }, []);

  //FUNÇÃO PARA ADICIONAR MEMBROS
  function addNewMember() {
    navigator("/add-member");
  }

  return (
    <div className="container">
      <br />
      <h2 className="text-center text-success">Lista de Membros Cadastrados</h2>
      <button className="btn btn-success" onClick={addNewMember}>
        Cadastrar Membro
      </button>
      <br />
      <table className="table table-striped">
        <thead>
          <tr>
            {/**<th>Id</th> */}
            <th>Nome</th>
            <th>Igreja</th>
            <th>Função na igreja</th>
            <th>Ocupação</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member._id}>
              {/**<td>{member._id}</td>*/}
              <td>{member.name}</td>
              <td>{member.church.name}</td>
              <td>{member.role}</td>
              <td>{member.occupation}</td>
              <td>{member.status}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListMemberComponent;
