import React, { useState } from 'react'



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

    function saveChurch(e){
        e.preventDefault();

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
         console.log(church);

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
                            <input type="text" name='name' value={name} className='form-control' onChange={(e)=>setName(e.target.value)}></input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Responsável:</label>
                            <input type="text" name='responsible' value={responsible} className='form-control' onChange={(e)=>setResponsible(e.target.value)}></input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Site:</label>
                            <input type="text" name='website' value={website} className='form-control' onChange={(e)=>setWebsite(e.target.value)}></input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Tipo:</label>
                            <select value={type} onChange={(e)=>setType(e.target.value)} className='form-control'>
                            <option value="Igreja">Igreja</option>
                            <option value="Congregacao">Congregação</option>
                            <option value="PontoPregacao">Ponto de Pregação</option>
                            <option value="Casa">Casa</option>
                            <option value="Arlivre">Ar Livre</option>
                            <option value="Matriz">Igreja Matriz</option>
                            </select>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Data da Fundação:</label>
                            <input type="date" name='foundationdate' value={foundationdate} className='form-control' onChange={(e)=>setFoundationdate(e.target.value)}></input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>CNPJ:</label>
                            <input type="text" name='cnpj' value={cnpj} className='form-control' onChange={(e)=>setCnpj(e.target.value)}></input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Endereço:</label>
                            <input type="text" name='address' value={address} className='form-control' onChange={(e)=>setAddress(e.target.value)}></input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Cidade:</label>
                            <input type="text" name='city' value={city} className='form-control' onChange={(e)=>setCity(e.target.value)}></input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Bairro:</label>
                            <input type="text" name='bairro' value={bairro} className='form-control' onChange={(e)=>setBairro(e.target.value)}></input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Estado:</label>
                            <select value={state} onChange={(e)=>setState(e.target.value)}        className='form-control'>
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
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Telefone:</label>
                            <input type="text" name='phone' value={phone} className='form-control' onChange={(e)=>setPhone(e.target.value)}></input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Email:</label>
                            <input type="text" name='email' value={email} className='form-control' onChange={(e)=>setEmail(e.target.value)}></input>
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