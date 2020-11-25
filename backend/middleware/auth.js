const jwt = require ("jsonwebtoken");

function auth(req,res,next){
    let jwtToken=req.header("Authorization");
    jwtToken=jwtToken.split(" ")[1];
    //valdiar si hay un token
    if(!jwtToken)return res.status(400).send("No existe Token para validar")
    //si existe un token
    try {
        const payload= jwt.verify(jwtToken,"clave");
        req.usuario=payload;
        next();
    } catch (error) {
        res.status(400).send("Ese token no es valido")
    }
}

//exports 
module.exports=auth;