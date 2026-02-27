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

//********* MÉTODO PARA PEGAR REGISTRO DAS ORAÇÕES ***********//
    //ROTA GETBYID - PARA PEGAR UM ÚNICO REGISTRO
/********************************************************* ***/

router.get("/:id", async(req, res)=>{
    const oracoes = await Oracao.findById(req.params.id);
    if(!oracoes){
        res.status(500).json({message: "A oração com o id informado, não foi encontrado."});
    }
    res.status(200).send(oracoes);
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

//** MÉTODO PARA FAZER ALTERAÇÕES NO REGISTRO DAS ORAÇÕES *****//
     //ROTA PUT- PARA ALTERAR ESTUDOS - /** ( UPDATE) */
/************************************************************* */

router.put("/:id", async(req, res)=>{
    const oracoes = await Oracao.findByIdAndUpdate(
        req.params.id,
        {
            motivo: req.body.motivo,
            descricao: req.body.descricao,
            prioridade: req.body.prioridade,
            estatus: req.body.estatus
        },
        {new: true}
    );
    if(!oracoes) return res.status(400).send("A oração não pode ser atualizado!");
    res.send(oracoes);
});

//******* MÉTODO PARA EXCLUIR OS REGISTROS DO ESTUDO *********//
                     /**( DELETE ) */
/************************************************************ */

router.delete("/:id", (req, res) => {
     Oracao.findByIdAndDelete(req.params.id)
        .then(oracoes => {
            if (oracoes) {
                return res
                    .status(200)
                    .json({ success: true, message: "Oração excluída com sucesso!" });
            } else {
                return res
                    .status(404)
                    .json({ success: false, message: " Oração não encontrada!" });
            }
        })
        .catch((err) => {
            return res.status(500).json({ success: false, error: err });
        });
});


module.exports = router;