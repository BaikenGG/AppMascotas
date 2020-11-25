//Modulos internos

const express=require("express");
const router=express.Router();

const {Usuario}=require("../model/usuario");
const {Mascota}=require("../model/mascota");

const auth = require("../middleware/auth");

router.post("/",auth,async(req,res)=>{
     //Revisar si el tipo existe
   
     let tipo = await Mascota.findOne({tipo: req.body.tipo})
     //Validar:
    
     if(tipo) return res.status(400).send("La mascota ya existe en la BD")

    const usuario=await Usuario.findById(req.usuario._id);
    if(!usuario) return res.status(400).send("El usuario no existe");
    
    const mascota= new Mascota({

        idUsuario: usuario._id,
        nombre:req.body.nombre,
        tipo:req.body.tipo,
   
    });

    const result= await mascota.save();
    res.status(200).send(result);
})


////////exports 
module.exports = router;