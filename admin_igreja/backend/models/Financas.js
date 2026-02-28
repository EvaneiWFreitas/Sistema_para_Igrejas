/** BACKEND PARA FINANÇAS DA IGREJA */

const mongoose = require("mongoose");

const finacasSchema = new mongoose.Schema({
    tipo: {type: String, required: true},
    descricao: { type: String, required: true},
    quantia: { type: Number, required: true},
    data: {type: Date, required: true},
    metodoPagamento:{type: String, required: true},
    
});

module.exports = mongoose.model("Financas", finacasSchema);