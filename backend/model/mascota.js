const mongoose = require("mongoose")

const esquemaMascota = new mongoose.Schema({
    idUsuario:String,
    nombre:String,
    tipo:String,
    fecha:{
        type:Date,
        default:Date.now,
    }
})

//esports

const Mascota= mongoose.model("mascota",esquemaMascota);
module.exports.Mascota=Mascota;