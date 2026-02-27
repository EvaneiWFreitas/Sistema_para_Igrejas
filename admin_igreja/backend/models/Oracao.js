/** BACKEND PARA ORAÇÕES DA IGREJA */

const mongoose = require("mongoose");

const oracoesSchema = new mongoose.Schema({
    motivo: {type: String, required: true},
    descricao: { type: String, required: true},
    prioridade: { type: String, required: true},
    estatus: {type: String, required: true},
    
});

module.exports = mongoose.model("Oracao", oracoesSchema);