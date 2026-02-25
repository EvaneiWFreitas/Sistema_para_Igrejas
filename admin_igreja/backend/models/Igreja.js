/*** Church = IGREJA */
const mongoose = require("mongoose");

const igrejaSchema = new mongoose.Schema({
    name:{type: String, required: true},
    responsible:{type: String, required: true}, //RESPONSABILIDADE
    website:{type: String, required: true},
    type:{type: String, required: true}, //TIPO
    fundationdate:{type: Date, required:true}, //DATA DA FUNDAÇÃO
    cnpj:{type: String, required: true},
    address:{type:String, required:true}, //ENDEREÇO
    city:{type:String, required:true}, //CIDADE
    bairro:{type:String, required:true}, 
    estado:{type:String, required:true}, 
    phone:{type:String, required:true}, //TELEFONE

});

module.exports = mongoose.model("Igreja", igrejaSchema);