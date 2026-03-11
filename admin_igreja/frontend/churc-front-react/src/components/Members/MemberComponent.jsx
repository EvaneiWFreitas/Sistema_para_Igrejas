import React, { useEffect, useState } from "react";
import { getAllChurches } from "../../services/ChurchService";

const MemberComponent = () => {
  const [status, setStatus] = useState("");
  const [role, setRole] = useState("");
  const [baptismdate, setBaptismdate] = useState("");
  const [addimission, setAddimission] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [occupation, setOccupation] = useState("");

  //PARA AS IGREJAS
  const [church, setChurch] = useState(""); // PARA UMA IGREJA
  const [churches, setChurches] = useState([]); //O método .map() só funciona em arrays, não em string. Por isso vai dar erro. - Correção: inicialize como array vazio. const [churches, setChurches] = useState([]);

  useEffect(() => {
    getAllChurches()
      .then((response) => {
        /*  console.log(response.data); */
        setChurches(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [errors, setErrors] = useState({
    status: "",
    role: "",
    baptismdate: "",
    addimission: "",
    name: "",
    gender: "",
    birthdate: "",
    address: "",
    state: "",
    occupation: "",
  });

  function saveMember(e) {
    e.preventDefault();

    const member = {
      status,
      role,
      baptismdate,
      addimission,
      name,
      gender,
      birthdate,
      address,
      state,
      occupation,
    };

    console.log(member);
  }

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card col-md-10 offset-md-1 offset-md-1">
          <br />
          <h2 className="text-center text-success">Cadastro de Membros</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                {/***************************************
                 * SELECT PARA IGREJA *****************/}
                <label className="form-label">Igreja:</label>
                <select
                  className="form-control"
                  name="church"
                  value={church}
                  onChange={(e) => setChurch(e.target.value)}
                >
                  <option value="">Selecione a igreja</option>
                  {churches.map((church) => (
                    <option key={church._id} value={church._id}>
                      {church.name}
                    </option>
                  ))}
                </select>
              </div>
              {/**************************************
               *  SELECT PARA SITUAÇÃO *************/}
              <div className="form-group mb-2">
                <label className="form-label">Situação:</label>
                <select
                  type='text'
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="form-control"
                >
                  <option value="">
                    Selecione a situação
                  </option>
                  <option value="Ativo">Ativo</option>
                  <option value="Disciplinado">Disciplinado</option>
                  <option value="Transferido de outra igreja">
                    Transferido de outra igreja
                  </option>
                  <option value="Falecido">Falecido</option>
                  <option value="Em processo de Aprovacao">
                    Em processo de Aprovação
                  </option>
                  <option value="Inativo">Inativo</option>
                </select>
              </div>
              {/********************************************
               *  SELECT PARA CARGO **********************/}
              <div className="form-group mb-2">
                <label className="form-label">Cargo:</label>
                <select
                  type='text'
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="form-control"
                >
                  <option value="">Selecione o cargo:</option>
                  <option value="Pastor">Pastor</option>
                  <option value="Pastor Evanegelista">
                    Pastor Evanegelista
                  </option>
                  <option value="Pastor Missionario">Pastor Missionário</option>
                  <option value="Pastor Presidente">Pastor Presidente</option>
                  <option value="Evangelista">Evangelista</option>
                  <option value="Missionario">Missionário</option>
                  <option value="Missionaria">Missionária</option>
                  <option value="Aux de Trabalho">Aux de Trabalho</option>
                  <option value="Obreiro">Obreiro</option>
                  <option value="Obreira">Obreira</option>
                  <option value="Diacono">Diácono</option>
                  <option value="Diaconisa">Diaconisa</option>
                  <option value="Lider de Jovens">Lider de Jovens</option>
                  <option value="Dirigente de Circulo de Oracao">
                    Dirigente de Círculo de Oração
                  </option>
                  <option value="Líder Grupo de Oracao">
                    Líder Grupo de Oração
                  </option>
                  <option value="Líder Grupo dos Varoes">
                    Líder Grupo dos Varões
                  </option>
                  <option value="Conselheiro de Casais">
                    Conselheiro de Casais
                  </option>
                </select>
              </div>

              {/********************************************
               *  SELECT PARA FORMA DE ADMISSÃO **********/}
              <div className="form-group mb-2">
                <label className="form-label">Admissão:</label>
                <select
                  type='text'
                  name="addimission"
                  value={addimission}
                  onChange={(e) => setAddimission(e.target.value)}
                  className="form-control"
                >
                  <option value="">
                    Selecione a Forma de admissão
                  </option>
                  <option value="Batismo">Batismo</option>
                  <option value="Discipulado">Discipulado</option>
                  <option value="Aclamacao">Aclamação</option>
                  <option value="Transferido">Transferido</option>
                  <option value="Carta Apresentacao">
                    Carta de Apresentação
                  </option>
                  <option value="Recomendacao">Recomendação</option>
                  <option value="Outra Forma">Outra Forma</option>
                </select>
              </div>
              {/*************************************
               *  INFORMAÇÃO SOBRE DATA DE BATISMO **/}
              <div className="form-group mb-2">
                <label className="form-label">Data de Batismo:</label>
                <input
                  type="date"
                  name="baptismdate"
                  value={baptismdate}
                  onChange={(e) => setBaptismdate(e.target.value)}
                  className="form-control"
                ></input>
              </div>

              {/**************************************
               *  INFORMAÇÃO DO NOME ***************/}
              <div className="form-group mb-2">
                <label className="form-label">Nome:</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                ></input>
              </div>

              {/********************************************
               *  SELECT PARA GENERO **********************/}
              <div className="form-group mb-2">
                <label className="form-label">Genero:</label>
                <select
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="form-control"
                >
                  <option value="">
                    Selecione o Gênero
                  </option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                </select>
              </div>

              {/*************************************
               *  INFORMAÇÃO SOBRE DATA DE ANIVERSÁRIO **/}
              <div className="form-group mb-2">
                <label className="form-label">Data de Nascimento:</label>
                <input
                  type="date"
                  name="birthdate"
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                  className="form-control"
                ></input>
              </div>

              {/******************************************
               *  INFORMAÇÃO DO ENDEREÇO ***************/}
              <div className="form-group mb-2">
                <label className="form-label">Endereço:</label>
                <input
                  type="text"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-control"
                ></input>
              </div>

              {/********************************************
               *  SELECT ESTADO **********************/}
              <div className="form-group mb-2">
                <label className="form-label">Estado:</label>
                <select
                  name="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="form-control"
                >
                  <option value="">
                    Selecione o Estado
                  </option>
                  <option value="estado">Selecione o Estado</option>
                  <option value="Acre">Acre</option>
                  <option value="Alagoas">Alagoas</option>
                  <option value="Amazonas">Amazonas</option>
                  <option value="Amapa">Amapá</option>
                  <option value="Bahia">Bahia</option>
                  <option value="Ceara">Ceará</option>
                  <option value="Distrito Federal">Distrito Federal</option>
                  <option value="es">Espírito Santo</option>
                  <option value="Espírito Santo">Goiás</option>
                  <option value="Maranhao">Maranhão</option>
                  <option value="Mato Grosso">Mato Grosso</option>
                  <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                  <option value="Minas Gerais">Minas Gerais</option>
                  <option value="Para">Pará</option>
                  <option value="Paraíba">Paraíba</option>
                  <option value="Parana">Paraná</option>
                  <option value="Pernambuco">Pernambuco</option>
                  <option value="Piaui">Piauí</option>
                  <option value="Rio de Janeiro">Rio de Janeiro</option>
                  <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                  <option value="Rondonia">Rondônia</option>
                  <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                  <option value="Roraima">Roraima</option>
                  <option value="Santa Catarina">Santa Catarina</option>
                  <option value="Sergipe">Sergipe</option>
                  <option value="Sao Paulo">São Paulo</option>
                  <option value="Tocantins">Tocantins</option>
                </select>
              </div>

              {/********************************************
               *  SELECT PARA OCUPAÇAO **********************/}
              <div className="form-group mb-2">
                <label className="form-label">Profissão:</label>
                <select
                  type='text'
                  name="occupation"
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                  className="form-control"
                >
                  <option value="">
                    Selecione a Profissão
                  </option>
                  <option value="Engenheiro Civil">Engenheiro Civil</option>
                  <option value="Engenheiro Eletrico">
                    Engenheiro Eletrico
                  </option>
                  <option value="Engenheiro Mecanico">
                    Engenheiro Mecanico
                  </option>
                  <option value="Engenheiro Software">
                    Engenheiro Software
                  </option>
                  <option value="Engenheiro Sistemas">
                    Engenheiro Sistemas
                  </option>
                  <option value="Pedreiro">Pedreiro</option>
                  <option value="Advogado">Advogado</option>
                  <option value="Padeiro">Padeiro</option>
                  <option value="Confeiteiro">Confeiteiro</option>
                </select>
              </div>
                <button className='btn btn-success' onClick={saveMember}>
                  Cadastrar Membro
                </button>

            </form>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default MemberComponent;
