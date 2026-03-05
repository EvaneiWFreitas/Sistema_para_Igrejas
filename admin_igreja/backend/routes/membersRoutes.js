
const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const Member = require("../models/Member");
const Church = require("../models/Church");

//******** MÉTODO PARA LISTAR  TODOS OS MEMBROS SALVAS *****//
    //GET CONSULTAR MEMBROS /**( READ ) */
    //Tras os Membros e a Igreja que ele pertence.
/********************************************************* */
router.get('/', async (req, res) => {
    const memberList = await Member.find().populate("church");
    if(!memberList){
        res.status(500).json({success: false});
    }
    res.status(200).send(memberList);
});


//******** MÉTODO PARA LISTAR UM ÚNICO MEMBRO SALVO *****//
    //GETBYID CONSULTAR UM ÚNICO MEMBROS /**( READ ) */
    //Tras os Membros e a Igreja que ele pertence.
/********************************************************* */
router.get("/:id", async (req, res) => {
    const member = await Member.findById(req.params.id).populate("church");
    if(!member){
        res.status(404).json({message: "Não existe membro cadastrado no Id fornecido."});
    }else{
        res.status(200).send(member);
    }

});


//*************** MÉTODO PARA SALVAR  MEMBROS *****************//
    //POST SALVAR MEMBROS   /**( CREATE) */
/*********************************************************** */
router.post("/", async(req, res) => {
    const church = await Church.findById(req.body.church);
    if(!church) return res.status(402).send("Igreja Inválida.");

    let members = new Member({
            status: req.body.status,
            role: req.body.role,
            baptismdate: req.body.baptismdate,
            addimission: req.body.addimission,
            name: req.body.name,
            gender: req.body.gender,
            birthdate: req.body.birthdate,
            address: req.body.address,
            state:req.body.state,
            occupation: req.body.occupation,
            church:church,
        });

        members = await members.save();
        if(!members) return res.status(400).send("Membro não pode ser salvo!");
        res.send(members);
});

//********PUT -  MÉTODO PARA EDITAR UM ÚNICO MEMBRO SALVO *****//
    //PUT - UPDATE EDITAR MEMBROS   /**( UPDATE ) */
/********************************************************* */
router.put("/:id", async (req, res) => {
    const church = await Church.findById(req.body.church);
    if(!church)
        return res.status(404).send("Igreja Inválida.");
        const member = await Member.findByIdAndUpdate(
            req.params.id,
            {
                status: req.body.status,
                role: req.body.role,
                baptismdate: req.body.baptismdate,
                addimission: req.body.addimission,
                name: req.body.name,
                gender: req.body.gender,
                birthdate: req.body.birthdate,
                address: req.body.address,
                state:req.body.state,
                occupation: req.body.occupation,
                church:church,
            },
            {new:true}
        );
        if(!member){
            return res.status(400).send("O Membro não pode ser atualizado.");
        }else{
            res.send(member);
        }
    
});


//******* MÉTODO PARA EXCLUIR OS REGISTROS DO MEMBRO *********//
     //DELETE - EXCLUIR   /**( DELETE ) */
/*********************************************************** */
router.delete("/:id", (req,res)=>{
    Member.findByIdAndDelete(req.params.id)
    .then(member=>{
        if(member){
            return res
            .status(200)
            .json({success: true, message: "O Membro foi excluido!"});
        }else{
            return res
            .status(404)
            .json({success: false, message: "O Membro não foi encontrado!"});
        }   
    })
    .catch((err)=>{
        return res.status(500).json({success: false, error: err});
    });
});

module.exports = router;