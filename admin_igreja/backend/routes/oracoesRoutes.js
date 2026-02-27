const express = require("express");
const router = express.Router();


const Oracao = require("../models/Oracao");

//******* MÉTODO PARA LISTAR AS ORAÇÕES CADASTRADOS ********//
     //ROTA GET           /**( READ ) */
/********************************************************* */

router.get('/', async(req, res)=>{
   const oracoesList = await Oracao.find();
   if(!oracoesList){
        res.status(500).json({success: false});
   }
   res.status(200).send(oracoesList);
});


//*************** MÉTODO PARA SALVAR AS ORAÇÕES **************//
    //POST             /**( CREATE) */
/*********************************************************** */

router.post("/", async (req, res) => {
    let oracao = new Oracao({
        motivo: req.body.motivo,
        descricao: req.body.descricao,
        prioridade: req.body.prioridade,
        estatus: req.body.estatus,
    });
    oracao = await oracao.save();
    if(!oracao) return res.status(400).send("A oração não pode ser criado!");
    res.send(oracao);

});

module.exports = router;