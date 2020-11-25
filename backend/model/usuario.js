const mongoose = require("mongoose");
const jwt=require("jsonwebtoken")

const esquemaUsuario= new mongoose.Schema({
    nombre: String,
    correo: String,
    password: String,
});
//generar JWTOKEN
esquemaUsuario.methods.generateJWT = function(){
    return jwt.sign(
        {
            _id: this._id,
            nombre: this.nombre,
            correo: this.correo,
        },
        "clave"
    );
};

//EXPORTS

const Usuario = mongoose.model("usuario",esquemaUsuario);
module.exports.Usuario = Usuario;
module.exports.esquemaUsuario= esquemaUsuario;