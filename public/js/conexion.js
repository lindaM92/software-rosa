const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'softwarec'
});

conexion.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err.stack);
        return;
    }
    console.log('Conexion exitosa a la base de datos');
});


/* isertar datos a la base de datos */
/* const newDato = "INSERT INTO productos (IDproducto, Nombre, Descripcion, UniDisponibles) VALUES (NULL, 'papel higienico', 'rollo de papel doble hoja marca familia', '5')";
conexion.query(newDato, function(error,dato){
    if(error){
        throw error;
    }else{
        console.log ("datos agregados con exito");
    }
}) */

/* actualizar datos */

/* const actualizar = "UPDATE productos SET Descripcion = 'rollo de papel triple hoja marca familia' WHERE IDproducto = 2"
conexion.query(actualizar, function(error,info){
if (error) {
    throw error;
} else {
    console.log("el dato se actualizado con exito")
}
}

) */


/* borrar o eliminar datos */
/* const eliminar = "DELETE FROM productos WHERE IDproducto=3"
conexion.query(eliminar, function(error,info){
    if (error) {
        throw error;
    } else {
        console.log("el dato se elimino con exito")
    }
    })
 */




/* consultas a la base de datos  */
const produc = "SELECT * FROM productos";
conexion.query(produc,function(error,info){
    if(error){
        throw error;
    }else{
        console.log (info);
    }
});




conexion.end();


