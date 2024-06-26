/* importacion de la libreria */
const express = require ("express");
const mysql = require("mysql");

/* objeto para llamar todos los metodos de express */
const app = express();

/* conexion */
let conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'software'
});


/* app.get("/",function(req,res){
    res.send("hola");
}); */
app.set("view engine", "ejs");


/* para codificar todo lo que viene del html */
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", function(req,res){
    res.render("formRegistro");
});

app.post("/validar", function(req,res){
const datos = req.body;
let ced =datos.cedula;
let nom =datos.nombre;
let clav =datos.clave;
let cor =datos.correo;
let con =datos.contacto;
let fech =datos.fechaN;
let confi =datos.confirma;


/* para buscar si la cedula esta duplicada */
let duplicado = "SELECT * FROM usuarios WHERE cedula = "+ced+"";
conexion.query(duplicado, function(error, row){
if(error){
    throw error;
}else{
    if(row.length>0){
        console.log("el numero de cedula que desea ingresar ya existe");
    }else{
        let regis = "INSERT INTO usuarios (Cedula,Nombre,Clave,Correo,Contacto,FechaNacimiento,Confirmar) VALUES ('"+ced+"', '"+nom+"', '"+clav+"', '"+cor+"', '"+con+"', '"+fech+"', '"+confi+"') ";
        conexion.query(regis, function(error){
            if (error){
                throw error;
        }else{
            console.log("resgistro exitoso");
        }
        }); 
    }
}
});


});


/* configuracion del puerto para el servidor local  */
app.listen(3000,function(){
    console.log("conectado al puerto 3000");
});

/* ruta para las paginas estaticas  */
/* app.use(express.static("public")) */
