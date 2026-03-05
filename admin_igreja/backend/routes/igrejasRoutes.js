
const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const Igreja = require("../models/Igreja");


//******** MÉTODO PARA LISTAR  TODAS AS IGREJAS SALVAS *****//
                        /**( READ ) */
/********************************************************* */

router.get('/', async (req, res) => {
    //res.status(200).send("Chegou na Igreja");
    const igrejasList = await Igreja.find();
    if(!igrejasList){
        res.status(500).json({success: false});
    }
    res.status(200).send(igrejasList);
});

//************** MÉTODO PARA EDITAR A IGREJA ***************//
/********************************************************* */

router.get("/:id", async(req,res)=>{
    const igreja = await Igreja.findById(req.params.id);
    if(!igreja){
        res.status(500).json({message:"Não foi encontrada nenhuma Igreja neste id!"});
    }
    res.status(200).send(igreja);
});

//*************** MÉTODO PARA SALVAR  IGREJA *****************//
                        /**( CREATE) */
/*********************************************************** */

router.post("/", async(req, res) => {
    let igreja = new Igreja({
        name: req.body.name,
        responsible: req.body.responsible,
        website: req.body.website,
        type: req.body.type,
        fundationdate: req.body.fundationdate,
        cnpj: req.body.cnpj,
        address: req.body.address,
        city: req.body.city,
        bairro:req.body.bairro,
        estado:req.body.estado,
        phone: req.body.phone,
    });

    igreja = await igreja.save();
    if(!igreja) return res.status(400).send("Igreja não pode ser salva!");
    res.send(igreja);


});

//** MÉTODO PARA FAZER ALTERAÇÕES NO REGISTRO DA IGREJA ******//
                     /**( UPDATE) */
/*********************************************************** */

router.put("/:id", async(req,res)=>{
    const igreja = await Igreja.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            responsible: req.body.responsible,
            website: req.body.website,
            type: req.body.type,
            fundationdate: req.body.fundationdate,
            cnpj: req.body.cnpj,
            address: req.body.address,
            city: req.body.city,
            bairro:req.body.bairro,
            estado:req.body.estado,
            phone: req.body.phone,
        },
        {new: true}

    );

        if(!igreja) return res.status(400).send("A Igreja não pode ser atualizada!");
        res.send(igreja);

});


//******* MÉTODO PARA EXCLUIR OS REGISTROS DA IGREJA *********//
                     /**( DELETE ) */
/*********************************************************** */
router.delete("/:id", (req,res)=>{
    Igreja.findByIdAndDelete(req.params.id)
    .then(igreja=>{
        if(igreja){
            return res
            .status(200)
            .json({success: true, message: "A Igreja foi excluida!"});
        }else{
            return res
            .status(404)
            .json({success: false, message: "Igreja não encontrada!"});
        }   
    })
    .catch((err)=>{
        return res.status(500).json({success: false, error: err});
    });
});




module.exports = router;