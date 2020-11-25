//Modulos internos

const express=require("express");
const router=express.Router();


//modulos propios

const {Usuario}=require("../model/usuario");

//Rutas

router.post("/",async(req,res)=>{
    //Revisar si el usuario existe
    let usuario = await Usuario.findOne({correo: req.body.correo})
    //Validar:
    if(usuario) return res.status(400).send("El usuario ya existe en la BD")

    //Si el usuario no existe
    usuario = new Usuario({
        nombre: req.body.nombre,
        correo: req.body.correo,
        password: req.body.password,
    })
    //Guardar el usuario en la bd y generamos JSONWEBTOKEN
    const result=await usuario.save();
    const jwToken=usuario.generateJWT();
    res.status(200).send({jwToken});

});

//Exports

module.exports= router;