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