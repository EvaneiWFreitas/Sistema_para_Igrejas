/** BACKEND DE MEMBROS DA IGREJA */
const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
    status:{type: String, required: true},//Se esta Ativo, Inativo, Transferido etc
    role:{type: String, required: true},//Função dentro da Igreja:Pastor, Miss, etc
    baptismdate:{type: Date, required: true},//Data de Batismo
    addimission:{type: String, required: true},// Foi Batizado ou Foi Transferido
    name:{type: String, required: true},
    gender:{type: String, required: true},//Genero
    birthdate:{type: Date, required: true},//Data nascimento
    address:{type: String, required: true},//Endereço
    state:{type: String, required: true},//Estado: RJ,SP,MG etc...
    occupation:{type: String, required: true},//Ocupação

    //CHAVE ESTRANGEIRA - UM PARA MUITOS
    /**ONDE UMA IGREJA CONTÉM VARIOS MEMBROS E UM MEMBRO É VINCULADO
     * A UMA ÚNICA IGREJA
     */
    church:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Church",
        requirede: true,
    },

});

module.exports = mongoose.model("Member", memberSchema);