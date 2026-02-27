const express = require("express");
const router = express.Router();
const eventos = require("../models/Eventos");
const Eventos = require("../models/Eventos");

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


//********* MÉTODO PARA PEGAR REGISTRO DO EVENTO ******************//
    //ROTA GETBYID - PARA PEGAR UM ÚNICO REGISTRO
/********************************************************* *********/

router.get("/:id", async(req, res)=>{
    const evento = await Eventos.findById(req.params.id);
    if(!evento){
        res.status(500).json({message: "O evento com o id informado, não foi encontrado."});
    }
    res.status(200).send(evento);
});


//** MÉTODO PARA FAZER ALTERAÇÕES NO REGISTRO DOS ESTUDOS *****//
     //ROTA PUT- PARA ALTERAR ESTUDOS - /** ( UPDATE) */
/************************************************************ */

router.put("/:id", async(req, res)=>{
    const evento = await Eventos.findByIdAndUpdate(
        req.params.id,
        {
            nome: req.body.nome,
            descricao: req.body.descricao,
            inicio: req.body.inicio,
            termino: req.body.termino
        },
        {new: true}
    );
    if(!evento) return res.status(400).send("O evento não pode ser atualizado!");
    res.send(evento);
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

//******* MÉTODO PARA EXCLUIR OS REGISTROS DOS EVENTOS ********//
     //DELETE                /**( DELETE ) */
/************************************************************ */

router.delete("/:id", (req, res) => {
     Eventos.findByIdAndDelete(req.params.id)
        .then(eventos => {
            if (eventos) {
                return res
                    .status(200)
                    .json({ success: true, message: "Evento excluído com sucesso!" });
            } else {
                return res
                    .status(404)
                    .json({ success: false, message: "Evento não encontrado!" });
            }
        })
        .catch((err) => {
            return res.status(500).json({ success: false, error: err });
        });
});



module.exports = router;