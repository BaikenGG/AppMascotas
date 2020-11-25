//Modulos internos
const express=require("express");
const mongoose= require("mongoose");

//Modulos creados
const usuario=require("./routes/usuario");
const auth=require("./routes/auth");
const mascota=require("./routes/mascota");
//App
const app = express();
app.use(express.json());

//Ruta de mi api

app.use("/app/usuario",usuario);
app.use("/app/auth",auth);
app.use("/app/mascota",mascota);
//Puerta de ejecucióm

const port=process.env.PORT || 3010;
app.listen(port,()=>console.log("...Escuchando el puerto "+port))

mongoose.connect("mongodb://localhost/appmascota",{
    useNewUrlParser:true,
    useFindAndModify:false,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
.then(()=>console.log("La conexión fue un exito"))
.catch((error)=>console.log("No se ha podido conectar a mongo"+error));