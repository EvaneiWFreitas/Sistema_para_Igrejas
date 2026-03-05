const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const Player = require("../models/Player");

//******** MÉTODO PARA LISTAR TODAS ORAÇÕES ***************//
   //GET - LISTAR  AS ORAÇÕES   /**( READ ) */
/********************************************************* */
router.get('/', async (req, res) => {
    const playersList = await Player.find();
    if(!playersList){
        res.status(500).json({success: false});
    }else{
        res.status(200).send(playersList);
    }
    
});

//************** MÉTODO PARA LISTAR  ***************//
//GETBYID - METODO PARA LISTAR UM ÚNICO ESTUDO
/************************************************* */
router.get("/:id", async(req,res)=>{
    const players = await Player.findById(req.params.id);
    if(!players){
        res.status(500).json({message:"Não foi encontrada nenhuma Oração neste id!"});
    }else{
        res.status(200).send(players);
    }
    
});


//*************** MÉTODO PARA SALVAR  ***********************//
    //POST SALVAR AS ORAÇÕES   /**( CREATE) */
/*********************************************************** */
router.post("/", async(req, res) => {
    let players = new Player({
        reason: req.body.reason,
        description: req.body.description,
        priority: req.body.priority,
        status: req.body.status,
        
    });
    players = await players.save();
    if(!players){
        return res.status(400).send("Oração não pode ser salva!");
    } else{
        res.send(players);
    }
    
 });

 //** MÉTODO PARA FAZER ALTERAÇÕES NOS DADOS DAS ORAÇÕES ******//
       //PUT - FAZ ALTERAÇÃO - /**( UPDATE) */
  /************************************************************ */
  router.put("/:id", async(req,res)=>{
        const players = await Player.findByIdAndUpdate(
          req.params.id,
          {
               reason: req.body.reason,
               description: req.body.description,
               priority: req.body.priority,
               status: req.body.status,
          },
          {new: true}
  
        );
          if(!players){
             return res.status(400).send("A oração não pode ser atualizada!");
          }else{
             res.send(players);
          }
          
  });

//******* MÉTODO PARA EXCLUIR OS REGISTROS DAS ORAÇÕES *********//
   //DELETE - EXCLUI      /**( DELETE ) */
/************************************************************* */
router.delete("/:id", (req,res)=>{
    Player.findByIdAndDelete(req.params.id)
    .then(players=>{
        if(players){
            return res.status(200).json({success: true, message: "A oração foi excluida!"});
        }else{
            return res.status(404).json({success: false, message: "Oração não encontrado!"});
        }   
    })
    .catch((err)=>{
        return res.status(500).json({success: false, error: err});
    });
});

module.exports = router;