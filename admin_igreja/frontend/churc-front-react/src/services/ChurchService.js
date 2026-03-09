import axios from "axios";

//AQUI PEGAMOS OS DADOS DO BACKEND E TRAZEMOS PARA O FRONTEND
const REST_API_BASE_URL = "http://localhost:5000/api/v1/churches";

//FUNÇÃO GET - PARA PEGAR OS DADOS DAS IGREJAS NO BACKEND
export const getAllChurches = () => axios.get(REST_API_BASE_URL);
//FUNÇÃO POST - PARA SALVAR OS DADOS LÁ NO BACKEND
export const createChurch = (church) => axios.post(REST_API_BASE_URL, church);
//FUNÇÃO getChurchById - PARA PEGAR OS DADOS DA IGREJA PELO ID E PREENCHER O FORM
export const getChurchById = (churchId) => axios.get(REST_API_BASE_URL + "/" + churchId);
//FUNÇÃO updatChurch - PARA EDITAR PELO ID OS DADOS LÁ NO BACKEND
export const updatChurch = (churchId, church) => axios.put(REST_API_BASE_URL + "/" + churchId, church);