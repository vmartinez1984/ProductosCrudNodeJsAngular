//console.log("hola mundo");
const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors")
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

//Creadmos el servidor
const app = express();

//conectamos a la base de datos
conectarDB();

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors())

app.use(express.json())

app.use('/api/productos', require('./routes/productos'))

app.listen(4000, () =>{
    console.log("server run");
})



//Para usar swagger se instalo
//npm install swagger-ui-express
// se agrega el swagger.json
// para la documentación se debe de editar el swagger.json 
// https://editor.swagger.io/?_ga=2.117208709.2073551717.1652570800-369369585.1652570800
// y exportar a .json y pegar en el swagger.json
// Guia de open Api https://swagger.io/docs/specification/basic-structure/
