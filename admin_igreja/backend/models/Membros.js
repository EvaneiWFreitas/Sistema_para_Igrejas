/** BACKEND DE MEMBROS DA IGREJA */

const mongoose = require("mongoose");

const membrosSchema = new mongoose.Schema({
    status:{type: String, required: true},
    funcao:{type: String, required: true},
    dataBatismo:{type: Date, required: true},
    adimissao:{type: String, required: true},
    nome:{type: String, required: true},
    genero:{type: String, required: true},
    dataNasc:{type: Date, required: true},
    endereco:{type: String, required: true},
    estado:{type: String, required: true},
    ocupacao:{type: String, required: true},

    //CHAVE ESTRANGEIRA - UM PARA MUITOS
    /**ONDE UMA IGREJA CONTÉM VARIOS MEMBROS E UM MEMBRO É VINCULADO
     * A UMA ÚNICA IGREJA
     */
    igreja:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Igreja",
        requirede: true,
    },
});
module.exports = mongoose.model("Membros", membrosSchema);