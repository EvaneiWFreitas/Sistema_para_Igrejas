/** BACKEND DE ESTUDO BIBLICO DA IGREJA */
const mongoose = require("mongoose");

const studySchema = new mongoose.Schema({
    theDate: {type: Date, required: true},//Data que o estudo será realizado
    subject: {type: String, required: true},//Assunto do estudo
    description: {type: String, required: true},//Descrições sobre o estudo
    notes: {type: String, required: true},//Observações sobre o estudo

});

module.exports = mongoose.model("Study", studySchema);