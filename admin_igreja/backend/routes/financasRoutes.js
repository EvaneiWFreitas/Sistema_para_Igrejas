const express = require("express");
const router = express.Router();

//******* MÉTODO PARA LISTAR AS FINANÇAS CADASTRADOS ********//
     //ROTA GET           /**( READ ) */
/********************************************************* */

router.get('/', async(req, res)=>{
   const financasList = await Financas.find();
   if(!financasList){
        res.status(500).json({success: false});
   }
   res.status(200).send(financasList);
});

//********* MÉTODO PARA PEGAR REGISTRO DAS FINANÇAS ***********//
    //ROTA GETBYID - PARA PEGAR UM ÚNICO REGISTRO
/********************************************************* *****/

router.get("/:id", async(req, res)=>{
    const finacas = await Financas.findById(req.params.id);
    if(!finacas){
        res.status(500).json({message: "A finança com o id informado, não foi encontrado."});
    }
    res.status(200).send(finacas);
});


//*************** MÉTODO PARA SALVAR AS ORAÇÕES **************//
    //POST             /**( CREATE) */
/*********************************************************** */

const Financas = require("../models/Financas");

router.post("/", async (req, res) => {
    let financa = new Financas({
        tipo: req.body.tipo,
        descricao: req.body.descricao,
        quantia: req.body.quantia,
        data: req.body.data,
        metodoPagamento: req.body.metodoPagamento,
    });
    financa = await financa.save();
    if(!financa) return res.status(400).send("A finança não pode ser criado!");
    res.send(financa);

});


module.exports = router;