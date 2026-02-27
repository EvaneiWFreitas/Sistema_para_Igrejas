const express = require("express");
const router = express.Router();
const eventos = require("../models/Eventos");

//******* MÉTODO PARA LISTAR OS EVENTOS DA IGREJA *************//
    //GET             /**( CREATE) */
/************************************************************* */

router.get("/", async(req, res)=>{
    const eventosList = await eventos.find();
    if(!eventosList){
        res.status().json({success: false});

    }
    res.status(200).send(eventosList);
});


//******* MÉTODO PARA SALVAR OS EVENTOS DA IGREJA *************//
    //POST             /**( CREATE) */
/************************************************************* */

router.post("/", async (req, res) => {
    let evento = new eventos({
        nome: req.body.nome,
        descricao: req.body.descricao,
        inicio: req.body.inicio,
        termino: req.body.termino
    });
    evento = await evento.save();
    if(!evento) return res.status(400).send("O evento não pode ser criado!");
    res.send(evento);

});



module.exports = router;