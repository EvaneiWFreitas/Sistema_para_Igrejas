import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createChurch } from '../../services/ChurchService';



const ChurchComponent = () => {

    //Todos os Campos que compôe a Igreja.
    const [name, setName] = useState("");
    const [responsible, setResponsible] = useState("");
    const [website, setWebsite] = useState("");
    const [type, setType] = useState("");
    const [foundationdate, setFoundationdate] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [bairro, setBairro] = useState("");
    const [state, setState] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const navigator = useNavigate();

    //VALIDAÇÃO DOS CAMPOS
    const[errors, setErrors] = useState({
            name: "",
            responsible: "",
            website: "",
            type: "",
            foundationdate: "",
            cnpj: "",
            address: "",
            city: "",
            bairro: "",
            state: "",
            phone: "",
            email: "",
    });

    //CRIANDO A FUNÇÃO DE VALIDAÇÃO
    function validateForm(){
        let valid = true;
        const errorsCopy = {...errors};

        if(name.trim()){
            errorsCopy.name = "";
        }else{
            errorsCopy.name = "O nome é obrigatório";
            valid = false;
        }

        if(responsible.trim()){
            errorsCopy.responsible = "";
        }else{
            errorsCopy.responsible = "O responsável é obrigatório";
            valid = false;
        }

        if(website.trim()){
            errorsCopy.website = "";
        }else{
            errorsCopy.website = "O website é obrigatório";
            valid = false;
        }

        if(type.trim()){
            errorsCopy.type = "";
        }else{
            errorsCopy.type = "O tipo é obrigatório";
            valid = false;
        }

        if(foundationdate.trim()){
            errorsCopy.foundationdate = "";
        }else{
            errorsCopy.foundationdate = "A data da fundação é obrigatório";
            valid = false;
        }

        if(cnpj.trim()){
            errorsCopy.cnpj = "";
        }else{
            errorsCopy.cnpj = "O cnpj é obrigatório";
            valid = false;
        }

        if(address.trim()){
            errorsCopy.address = "";
        }else{
            errorsCopy.address = "O endereço é obrigatório";
            valid = false;
        }

        if(city.trim()){
            errorsCopy.city = "";
        }else{
            errorsCopy.city = "A cidade é obrigatório";
            valid = false;
        }

        if(bairro.trim()){
            errorsCopy.bairro = "";
        }else{
            errorsCopy.bairro = "O bairro é obrigatório";
            valid = false;
        }

        if(state.trim()){
            errorsCopy.state = "";
        }else{
            errorsCopy.state = "O Estado é obrigatório";
            valid = false;
        }

        if(phone.trim()){
            errorsCopy.phone = "";
        }else{
            errorsCopy.phone = "O número de telefone é obrigatório";
            valid = false;
        }

        if(email.trim()){
            errorsCopy.email = "";
        }else{
            errorsCopy.email = "O email é obrigatório";
            valid = false;
        }
        setErrors(errorsCopy);
        console.log(errorsCopy);
        return valid;
    }

    //FUNÇÃO SALVAR A IGREJA
    function saveChurch(e){
        e.preventDefault();
        if(validateForm()){
            const church = {
                name,
                responsible,
                website,
                type,
                foundationdate,
                cnpj,
                address,
                city,
                bairro,
                state,
                phone,
                email,
            };
            //console.log(church);
            createChurch(church).then((response)=>{
                console.log(response.data);
                //navigator("/churches")chama a página Listar Igrejas quando os dados da igreja são salvos.
                navigator("/churches");
            })
            .catch((error)=>{
                console.error(error);
            });

        }
    }

  return (
    <div className='container'>
    <br/>
        <div className='row'>
            <div className='card col-md-10 offset-md-1 offset-md-1'>
                <br/>
                <h2 className='text-center text-success'>Adicionar Igreja</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Nome:</label>
                            <input type="text" name='name' value={name} 
                            className={`form-control ${errors.name ? "is-invalid":""}`}
                            onChange={(e)=>setName(e.target.value)}>
                            </input>
                            {errors.name &&(
                                <div className='invalid-feedback'>{errors.name}</div>
                            )}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Responsável:</label>
                            <input type="text" name='responsible' value={responsible} 
                            className={`form-control ${errors.responsible ? "is-invalid":""}`}
                            onChange={(e)=>setResponsible(e.target.value)}>
                            </input>
                            {errors.responsible &&(
                                <div className='invalid-feedback'>{errors.responsible}</div>
                            )}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Site:</label>
                            <input type="text" name='website' value={website} 
                            className={`form-control ${errors.website ? "is-invalid":""}`} 
                            onChange={(e)=>setWebsite(e.target.value)}>
                            </input>
                            {errors.website &&(
                                <div className='invalid-feedback'>{errors.website}</div>
                            )}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Tipo:</label>
                            <select value={type} onChange={(e)=>setType(e.target.value)} className={`form-control ${errors.type ? "is-invalid":""}`} >
                            <option>Escolha um tipo para igreja:</option>
                            <option value="Igreja Filial">Igreja Filial</option>
                            <option value="Congregacao">Congregação</option>
                            <option value="Ponto Pregacao">Ponto de Pregação</option>
                            <option value="Cultos na Casa">Casa</option>
                            <option value="Ar livre">Ar Livre</option>
                            <option value="Igreja Matriz">Igreja Matriz</option>
                            </select>
                            {errors.type &&(
                                <div className='invalid-feedback'>{errors.type}</div>
                            )}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Data da Fundação:</label>
                            <input type="date" name='foundationdate' value={foundationdate} 
                            className={`form-control ${errors.foundationdate ? "is-invalid":""}`}
                            onChange={(e)=>setFoundationdate(e.target.value)}>
                            </input>
                            {errors.foundationdate &&(
                                <div className='invalid-feedback'>{errors.foundationdate}</div>
                            )}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>CNPJ:</label>
                            <input type="text" name='cnpj' value={cnpj} 
                            className={`form-control ${errors.cnpj ? "is-invalid":""}`}
                            onChange={(e)=>setCnpj(e.target.value)}>
                            </input>
                            {errors.cnpj &&(
                                <div className='invalid-feedback'>{errors.cnpj}</div>
                            )}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Endereço:</label>
                            <input type="text" name='address' value={address} 
                            className={`form-control ${errors.address ? "is-invalid":""}`} 
                            onChange={(e)=>setAddress(e.target.value)}>         
                            </input>
                            {errors.address &&(
                            <div className='invalid-feedback'>{errors.address}</div>
                            )}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Cidade:</label>
                            <input type="text" name='city' value={city} 
                            className={`form-control ${errors.city ? "is-invalid":""}`} 
                            onChange={(e)=>setCity(e.target.value)}>
                            </input>
                            {errors.city &&(
                            <div className='invalid-feedback'>{errors.city}</div>
                            )}
                        </div>
                        
                        <div className='form-group mb-2'>
                            <label className='form-label'>Bairro:</label>
                            <input type="text" name='bairro' value={bairro} 
                            className={`form-control ${errors.bairro ? "is-invalid":""}`} 
                            onChange={(e)=>setBairro(e.target.value)}>
                            </input>
                            {errors.bairro &&(
                            <div className='invalid-feedback'>{errors.bairro}</div>
                            )}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Estado:</label>
                            <select value={state} 
                            onChange={(e)=>setState(e.target.value)}
                            className={`form-control ${errors.state ? "is-invalid":""}`} >
                                <option>Selecione um estado</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP">São Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </select>
                            {errors.state &&(
                            <div className='invalid-feedback'>{errors.state}</div>
                            )}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Telefone:</label>
                            <input type="text" name='phone' value={phone} 
                            className={`form-control ${errors.phone ? "is-invalid":""}`}  
                            onChange={(e)=>setPhone(e.target.value)}>
                            </input>
                            {errors.phone &&(
                            <div className='invalid-feedback'>{errors.phone}</div>
                            )}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Email:</label>
                            <input type="text" name='email' value={email} 
                            className={`form-control ${errors.email ? "is-invalid":""}`}
                            onChange={(e)=>setEmail(e.target.value)}>
                            </input>
                            {errors.email &&(
                            <div className='invalid-feedback'>{errors.email}</div>
                            )}
                        </div>
                        <button className='btn btn-success' onClick={saveChurch}>
                            Salvar Igreja
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <br/>
    </div>
  )
}

export default ChurchComponent