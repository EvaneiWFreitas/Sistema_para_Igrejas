/** BACKEND DO FINANCEIRO DA IGREJA */
const mongoose = require("mongoose");

const financialSchema = new mongoose.Schema({
    type: {type: String, required: true},//Tipo(Receita/Despesa)
    description: {type: String, required: true},//Descrição
    amount: {type: Number, required: true},//Valor
    theDate: {type: Date, required: true},//Data
    paymentMethod: {type: String, required: true},//Metodo de Pagamento
});

module.exports = mongoose.model("Financial", financialSchema);