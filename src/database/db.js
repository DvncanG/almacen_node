//PRIMERO IMPORTAMOS LA BD
const Sequelize = require("sequelize")

//Luego nos creamos la conexión

//("nombredelaBD", "usuario", "contraseña")
const sequelize = new Sequelize("almacen", "root", "", {
    //eL HOST DE ARRANQUE
    host:"localhost",
    //EL TIPO DE BD
    dialect: "mysql"
})


//POR ULTIMO EL MODULE que exporta la función de sequelize
module.exports=sequelize;

