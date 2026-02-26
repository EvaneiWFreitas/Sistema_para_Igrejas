const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const Estudo = require("../models/Estudo");


//**** MÉTODO PARA LISTAR  TODOS OS ESTUDOS CADASTRADOS ***//
     //ROTA GET           /**( READ ) */
/********************************************************* */

router.get('/', async(req, res)=>{
   const estudosList = await Estudo.find();
   if(!estudosList){
        res.status(500).json({success: false});
   }
   res.status(200).send(estudosList);
});


//********* MÉTODO PARA PEGAR REGISTRO DO ESTUDO BÍBLICO ***********//
    //ROTA GETBYID - PARA PEGAR UM ÚNICO REGISTRO
/********************************************************* *********/

router.get("/:id", async(req, res)=>{
    const estudo = await Estudo.findById(req.params.id);
    if(!estudo){
        res.status(500).json({message: "O estudo com o id informado, não foi encontrado."});
    }
    res.status(200).send(estudo);
});




//*************** MÉTODO PARA SALVAR OS  ESTUDOS BÍBLICOS **************//
    //POST             /**( CREATE) */
/*********************************************************** */

router.post("/", async (req, res) => {
    let estudo = new Estudo({
        data: req.body.data,
        assunto: req.body.assunto,
        descricao: req.body.descricao,
        notas: req.body.notas
    });
    estudo = await estudo.save();
    if(!estudo) return res.status(400).send("O estudo não pode ser criado!");
    res.send(estudo);

});






module.exports = router;