const express = require("express");
const router = express.Router();

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