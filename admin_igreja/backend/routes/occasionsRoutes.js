const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const Occasion = require("../models/Occasion");

//******** MÉTODO PARA LISTAR TODOS OS EVENTOS BÍBLICOS *****//
   //GET - LISTAR  OS EVENTOS   /**( READ ) */
/********************************************************* */
router.get('/', async (req, res) => {
    const occasionsList = await Occasion.find();
    if(!occasionsList){
        res.status(500).json({success: false});
    }else{
        res.status(200).send(occasionsList);
    }
    
});

//************** MÉTODO PARA LISTAR  ***************//
//GETBYID - METODO PARA LISTAR UM ÚNICO EVENTO
/************************************************* */
router.get("/:id", async(req,res)=>{
    const occasions = await Occasion.findById(req.params.id);
    if(!occasions){
        res.status(500).json({message:"Não foi encontrada nenhum Evento neste id!"});
    }else{
        res.status(200).send(occasions);
    }
    
});

//*************** MÉTODO PARA SALVAR OS EVENTOS **************//
    //POST SALVAR OS EVENTOS   /**( CREATE) */
/*********************************************************** */
router.post("/", async(req, res) => {
    let occasions = new Occasion({
        name: req.body.name,
        description: req.body.description,
        start: req.body.start,
        end: req.body.end,
        
    });
    occasions = await occasions.save();
    if(!occasions){
        return res.status(400).send("Evento não pode ser salvo!");
    } else{
        res.send(occasions);
    }  
 });

//** MÉTODO PARA FAZER ALTERAÇÕES NOS DADOS DOS EVENTOS ******//
      //PUT - FAZ ALTERAÇÃO - /**( UPDATE) */
 /************************************************************ */
 router.put("/:id", async(req,res)=>{
     const occasions = await Occasion.findByIdAndUpdate(
         req.params.id,
         {
             name: req.body.name,
             description: req.body.description,
             start: req.body.start,
             end: req.body.end,
         },
         {new: true}
 
     );
 
         if(!occasions){
            return res.status(400).send("O Evento não pode ser atualizado!");
         }else{
            res.send(occasions);
         }
         
 });

//******* MÉTODO PARA EXCLUIR OS REGISTROS DOS EVENTOS *********//
   //DELETE - EXCLUI      /**( DELETE ) */
/************************************************************* */
router.delete("/:id", (req,res)=>{
    Occasion.findByIdAndDelete(req.params.id).then(occasions=>{
        if(occasions){
            return res.status(200).json({success: true, message: "O Evento foi excluido!"});
        }else{
            return res.status(404).json({success: false, message: "Evento não encontrado!"});
        }   
    })
    .catch((err)=>{
        return res.status(500).json({success: false, error: err});
    });
});

 module.exports = router;