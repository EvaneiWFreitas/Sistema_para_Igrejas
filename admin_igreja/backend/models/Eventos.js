/** BACKEND PARA EVENTOS DA IGREJA */

const mongoose = require("mongoose");

const eventosSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    descricao: { type: String, required: true},
    inicio: { type: Date, required: true},
    termino: {type: Date, required: true},
    
});

module.exports = mongoose.model("Eventos", eventosSchema);