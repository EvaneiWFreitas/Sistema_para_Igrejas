const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const Financial = require("../models/Financial");

//******** MÉTODO PARA LISTAR TODOS AS OFERTAS ************//
   //GET - LISTAR  AS OFERTAS   /**( READ ) */
/********************************************************* */
router.get('/', async (req, res) => {
    const financialList = await Financial.find();
    if(!financialList){
        res.status(500).json({success: false});
    }else{
        res.status(200).send(financialList);
    }
    
});

//************** MÉTODO PARA LISTAR  ***************//
//GETBYID - METODO PARA LISTAR UMA ÚNICA OFERTA
/************************************************* */
router.get("/:id", async(req,res)=>{
    const financial = await Financial.findById(req.params.id);
    if(!financial){
        res.status(500).json({message:"Não foi encontrada nenhuma Oferta neste id!"});
    }else{
        res.status(200).send(financial);
    }
    
});

//******** MÉTODO PARA SALVAR OS DADOS DO FINANCEIRO *********//
    //POST SALVAR FINANCEIRO   /**( CREATE) */
/*********************************************************** */
router.post("/", async(req, res) => {
    let financial = new Financial({
        type: req.body.type,
        description: req.body.description,
        amount: req.body.amount,  
        theDate: req.body.theDate,
        paymentMethod: req.body.paymentMethod,
    });
    financial = await financial.save();
    if(!financial){
        return res.status(400).send("Financeiro não pode ser salvo!");
    } else{
        res.send(financial);
    }
    
 });

//** MÉTODO PARA FAZER ALTERAÇÕES NOS DADOS DAS OFERTAS ******//
      //PUT - FAZ ALTERAÇÃO - /**( UPDATE) */
 /************************************************************ */
    router.put("/:id", async(req,res)=>{
        const financial = await Financial.findByIdAndUpdate(
            req.params.id,
            {
                type: req.body.type,
                description: req.body.description,
                amount: req.body.amount,  
                theDate: req.body.theDate,
                paymentMethod: req.body.paymentMethod,
            },
            {new: true}
 
        );
 
         if(!financial){
            return res.status(400).send("A oferta não pode ser atualizada!");
         }else{
            res.send(financial);
         }
         
    });

//******* MÉTODO PARA EXCLUIR OS REGISTROS DASOFERTAS *********//
   //DELETE - EXCLUI      /**( DELETE ) */
/************************************************************* */
router.delete("/:id", (req,res)=>{
    Financial.findByIdAndDelete(req.params.id)
    .then(financial=>{
        if(financial){
            return res.status(200).json({success: true, message: "A Oferta foi excluida!"});
        }else{
            return res.status(404).json({success: false, message: "Oferta não encontrada!"});
        }   
    })
    .catch((err)=>{
        return res.status(500).json({success: false, error: err});
    });
});


module.exports = router;