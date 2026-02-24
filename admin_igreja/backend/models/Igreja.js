/*** Church = IGREJA */
const mongoose = require("mongoose");

const igrejaSchema = new mongoose.Schema({
    name:{type: String, required: true},
    responsavel:{type: String, required: true},
    website:{type: String, required: true},
    type:{type: String, required: true},
    datafundacao:{type: Date, required:true},
    cnpj:{type: String, required: true},
    endereco:{type:String, required:true},
    cidade:{type:String, required:true},
    bairro:{type:String, required:true},
    estado:{type: String, required:true},
    telefone:{type:String, required:true},

});

module.exports = mongoose.model("Igreja", igrejaSchema);