
const express = require("express");
const app = express();
const conn = require("./db/conn");

//TORNAR O SERVIDOR ACESSIVEL EM QUALQUER LUGAR.
const cors = require("cors");
app.use(cors());

//PARA USAR O .env
require("dotenv/config");
const api = process.env.API_URL;

//ANÁLISE DOS DADOS QUE VEM DAS REQUISIÇÕES HTTP
const bodyParser = require("body-parser");

const morgan = require("morgan");

//app.use(express.json());

//app.get("/", (req,res) => {
// res.send("primeira requisição");
//});

//MIDDLEWARE PARA RECEBER E ENVIAR COM JASON
app.use(bodyParser.json());
app.use(morgan("tiny"));

const igrejasRoutes = require("./routes/igrejasRoutes");
const membrosRoutes = require("./routes/membrosRoutes");
const estudosRoutes = require("./routes/estudosRoutes");
const eventosRoutes = require("./routes/eventosRoutes");
const oracoesRoutes = require("./routes/oracoesRoutes");
const financasRoutes = require("./routes/financasRoutes");

app.use(`${api}/igrejas`, igrejasRoutes);
app.use(`${api}/membros`, membrosRoutes);
app.use(`${api}/estudos`, estudosRoutes);
app.use(`${api}/eventos`, eventosRoutes);
app.use(`${api}/oracoes`, oracoesRoutes);
app.use(`${api}/financas`, financasRoutes);

app.listen(5000, () => {
    console.log("Servidor rodando na porta 5000");
})