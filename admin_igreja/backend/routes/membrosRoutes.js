const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const Membros = require("../models/Membros");
const Igreja = require('../models/Igreja');


//******** MÉTODO PARA LISTAR  TODAS AS MEMBROS SALVAS *****//
     //GET                   /**( READ ) */
/********************************************************* */



//*************** MÉTODO PARA SALVAR  MEMBROS *****************//
    //POST                    /**( CREATE) */
/*********************************************************** */
router.post("/", async(req, res)=>{
    const igreja = await Igreja.findById(req.body.igreja);
    if(!igreja) return res.status(402).send("Igreja inválida.");

    let membro = Membros({
        status: req.body.status,
        funcao: req.body.funcao,
        dataBatismo: req.body.dataBatismo,
        adimissao: req.body.adimissao,
        nome: req.body.nome,
        genero: req.body.genero,
        dataNasc: req.body.dataNasc,
        endereco: req.body.endereco,
        estado: req.body.estado,
        ocupacao: req.body.ocupacao,
        igreja:igreja,
    });
    membro = await membro.save();
    if(!membro) return res.status(400).send("O membro não pode ser criado.");
    res.send(membro);
});

module.exports = router;