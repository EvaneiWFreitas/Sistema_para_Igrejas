
const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const Study = require("../models/Study");


//******** MÉTODO PARA LISTAR  TODOS OS ESTUDOS BÍBLICOS *****//
   //GET - LISTAR  OS ESTUDOS   /**( READ ) */
/********************************************************* */
router.get('/', async (req, res) => {
    const studyList = await Study.find();
    if(!studyList){
        res.status(500).json({success: false});
    }else{
        res.status(200).send(studyList);
    }
    
});

//************** MÉTODO PARA LISTAR  ***************//
//GETBYID - METODO PARA LISTAR UM ÚNICO ESTUDO
/************************************************* */
router.get("/:id", async(req,res)=>{
    const studies = await Study.findById(req.params.id);
    if(!studies){
        res.status(500).json({message:"Não foi encontrada nenhum Estudo neste id!"});
    }else{
        res.status(200).send(studies);
    }
    
});

//*************** MÉTODO PARA SALVAR OS ESTUDOS **************//
    //POST SALVAR OS ESTUDOS   /**( CREATE) */
/*********************************************************** */
router.post("/", async(req, res) => {
    let study = new Study({
        theDate: req.body.theDate,
        subject: req.body.subject,
        description: req.body.description,
        notes: req.body.notes,
        
    });
    study = await study.save();
    if(!study){
        return res.status(400).send("Igreja não pode ser salva!");
    } else{
        res.send(study);
    }
    
 });

 //** MÉTODO PARA FAZER ALTERAÇÕES NOS DADOS DOS ESTUDOS ******//
      //PUT - FAZ ALTERAÇÃO - /**( UPDATE) */
 /************************************************************ */
 router.put("/:id", async(req,res)=>{
     const studies = await Study.findByIdAndUpdate(
         req.params.id,
         {
             theDate: req.body.theDate,
             subject: req.body.subject,
             description: req.body.description,
             notes: req.body.notes,
         },
         {new: true}
 
     );
 
         if(!studies){
            return res.status(400).send("O Estudo não pode ser atualizado!");
         }else{
            res.send(studies);
         }
         
 });

//******* MÉTODO PARA EXCLUIR OS REGISTROS DOS ESTUDOS *********//
   //DELETE - EXCLUI      /**( DELETE ) */
/************************************************************* */
router.delete("/:id", (req,res)=>{
    Study.findByIdAndDelete(req.params.id)
    .then(studies=>{
        if(studies){
            return res
            .status(200)
            .json({success: true, message: "O Estudo foi excluido!"});
        }else{
            return res
            .status(404)
            .json({success: false, message: "Estudo não encontrado!"});
        }   
    })
    .catch((err)=>{
        return res.status(500).json({success: false, error: err});
    });
});


module.exports = router;