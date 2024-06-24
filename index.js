/* importacion de la libreria */
const express = require ("express");

/* objeto para llamar todos los metodos de express */
const app = express();

/* app.get("/",function(req,res){
    res.send("hola");
}); */

/* configuracion del puerto para el servidor local  */
app.listen(3000,function(){
    console.log("conectado al puerto 3000");
});

/* ruta para las paginas estaticas  */
app.use(express.static("public"))
