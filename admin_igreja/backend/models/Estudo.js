/** BACKEND PA ESTUDOS DA IGREJA */

const mongoose = require("mongoose");

const estudoSchema = new mongoose.Schema({
    data: {type: Date, required: true},
    assunto: { type: String, required: true},
    descricao: { type: String, required: true},
    notas: {type: String, required: true},
    
});

module.exports = mongoose.model("Estudo", estudoSchema);