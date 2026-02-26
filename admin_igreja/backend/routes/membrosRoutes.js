const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const Membros = require("../models/Membros");
const Igreja = require('../models/Igreja');


//******** MÉTODO PARA LISTAR  TODAS AS MEMBROS SALVAS *****//
     //ROTA GET           /**( READ ) */
/********************************************************* */

router.get('/', async(req, res)=>{
    const membrosList = await Membros.find().populate("igreja");
    if(!membrosList){
        res.status(500).json({success: false});
    }
    res.status(200).send(membrosList);
});


//********* MÉTODO PARA PEGAR REGISTRO DE MEMBRO ***********//
    //ROTA GETBYID - PARA PEGAR UM ÚNICO REGISTRO
/********************************************************* */

router.get("/:id", async(req, res)=>{
    const membro = await Membros.findById(req.params.id).populate("igreja");
    if(!membro){
        res.status(404).json({message: "Membro com o id fornecido não encontrado."});
    }
    res.status(200).send(membro);
});


//*************** MÉTODO PARA SALVAR  MEMBROS *****************//
    //POST             /**( CREATE) */
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


//** MÉTODO PARA FAZER ALTERAÇÕES NO REGISTRO DE MEMBROS *****//
     //PUT                /**( UPDATE) */
/*********************************************************** */





module.exports = router;