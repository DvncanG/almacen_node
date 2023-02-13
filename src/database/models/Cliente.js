//importamos la conexión
const sequelize = require("../db")

//importamos el modelo y los tipos de datos del sequelize
const {Model, DataTypes} = require("sequelize")

//Creamos la clase que va a heredar del model y le pasamos un objeto vacío
class Cliente extends Model {}

//Declaramos el modelo.
Cliente.init({
    //vamos declarando los elementos que va a tener cada dato: id, nombre, edad etc. y sus restricciones en la bd
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    nombre:{
        type:DataTypes.STRING(50), //Podemos indicar la longitud del string
        allowNull:false,
    },
    direccion:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    fecha_nac:{
        type:DataTypes.DATE,
        allowNull:false,
    }
},{
    sequelize,
    modelName:"cliente",//Cuando se crea, lo pone en plural.
    timestamps: false, 
})

//Rematamos poniendo el module que exporta la clase

module.exports = Cliente;


