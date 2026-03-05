/** BACKEND PLAYERS - ORAÇÕES */
const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    reason: {type: String, required: true},//Motivo
    description: {type: String, required: true},//Descrição
    priority: {type: String, required: true},//Prioridade:(Urgente,Alta,Média)
    status: {type: String, required: true},//Situação:(Se já foi feito, não feito)
});

module.exports = mongoose.model("Player", playerSchema);