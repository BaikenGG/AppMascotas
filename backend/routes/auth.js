const express = require("express");
const router = express.Router();


const {Usuario}=require("../model/usuario");
router.post("/",async(req,res)=>{
    let usuario=await Usuario.findOne({correo: req.body.correo});

    if(!usuario) return res.status(400).send("correo o contraseña son invalidos");
    if(usuario.password !== req.body.password) return res.status(400).send("Correo o contraseña son validos");

    const jwtToken= usuario.generateJWT();
    res.status(200).send({jwtToken});
});
//EXPORTS
module.exports=router;