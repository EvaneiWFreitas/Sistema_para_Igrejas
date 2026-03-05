/*** Church = IGREJA */
const mongoose = require("mongoose");

const churchSchema = new mongoose.Schema({
    name:{type: String, required: true},
    responsible:{type: String, required: true}, //RESPONSABILIDADE
    website:{type: String, required: true},
    type:{type: String, required: true}, //TIPO
    foundationdate:{type: Date, required:true}, //DATA DA FUNDAÇÃO
    cnpj:{type: String, required: true},
    address:{type:String, required:true}, //ENDEREÇO
    city:{type:String, required:true}, //CIDADE
    state:{type:String, required:true},  
    phone:{type:String, required:true}, //TELEFONE

});

module.exports = mongoose.model("Church", churchSchema);