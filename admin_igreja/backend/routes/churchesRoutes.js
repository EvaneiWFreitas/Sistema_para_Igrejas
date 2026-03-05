
const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const Church = require("../models/Church");


//******** MÉTODO PARA LISTAR  TODAS AS IGREJAS SALVAS *****//
                        /**( READ ) */
/********************************************************* */

router.get('/', async (req, res) => {
    {/*res.status(200).send("Chegou na Igreja");*/}
    const churchList = await Church.find();
    if(!churchList){
        res.status(500).json({success: false});
    }
    res.status(200).send(churchList);
});

//************** MÉTODO PARA EDITAR A IGREJA ***************//
/********************************************************* */

router.get("/:id", async(req,res)=>{
    const churches = await Church.findById(req.params.id);
    if(!churches){
        res.status(500).json({message:"Não foi encontrada nenhuma Igreja neste id!"});
    }
    res.status(200).send(churches);
});

//*************** MÉTODO PARA SALVAR  IGREJA *****************//
                        /**( CREATE) */
/*********************************************************** */

router.post("/", async(req, res) => {
    let churches = new Church({
        name: req.body.name,
        responsible: req.body.responsible,
        website: req.body.website,
        type: req.body.type,
        foundationdate: req.body.foundationdate,
        cnpj: req.body.cnpj,
        address: req.body.address,
        city: req.body.city,
        state:req.body.state,
        phone: req.body.phone,
    });

    churches = await churches.save();
    if(!churches) return res.status(400).send("Igreja não pode ser salva!");
    res.send(churches);


});

//** MÉTODO PARA FAZER ALTERAÇÕES NO REGISTRO DA IGREJA ******//
                     /**( UPDATE) */
/*********************************************************** */

router.put("/:id", async(req,res)=>{
    const churches = await Church.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            responsible: req.body.responsible,
            website: req.body.website,
            type: req.body.type,
            foundationdate: req.body.foundationdate,
            cnpj: req.body.cnpj,
            address: req.body.address,
            city: req.body.city,
            state:req.body.state,
            phone: req.body.phone,
        },
        {new: true}

    );

        if(!churches) return res.status(400).send("A Igreja não pode ser atualizada!");
        res.send(churches);

});


//******* MÉTODO PARA EXCLUIR OS REGISTROS DA IGREJA *********//
                     /**( DELETE ) */
/*********************************************************** */
router.delete("/:id", (req,res)=>{
    Church.findByIdAndDelete(req.params.id)
    .then(church=>{
        if(church){
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