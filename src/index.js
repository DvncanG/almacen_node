const bodyParser = require("body-parser");
const express = require("express");
const app = express();



const apiroutes = require("./routes/apiRouter");

//NOS FALTA IMPORTAR LA BD CON SEQUELIZE Y LLAMAR A LA BD EN EL LISTEN DEL FINAL
const sequelize = require("./database/db")


//REQUIRE DE LAS ASOCIACIONES
require("./database/associations")

// Conversión a json datos que nos envína para post, put, patch...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// conexión con mysql
app.use("/almacen", apiroutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor eschando en http://localhost:${PORT}`);
  //FALTABA LA LINEA SIGUIENTE
  sequelize
    .sync({force:false}) //Si está en true, nos macha las tablas. Si está en false, no me modifica las tablas existentes.
    .then(()=> console.log("Tablas sincronizadas"))
});