import axios from "axios";

const REST_API_BASE_URL = "http://localhost:5000/api/v1/members";

//FUNÇÃO GET - PARA PEGAR OS DADOS DOS MEMBROS DA IGREJA  NO BACKEND
export const getAllMembers = () => axios.get(REST_API_BASE_URL);