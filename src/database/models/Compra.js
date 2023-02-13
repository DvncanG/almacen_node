//importamos la conexión
const sequelize = require("../db")

//importamos el modelo y los tipos de datos del sequelize
const {Model, DataTypes} = require("sequelize")
const Producto = require("./Producto")
const Cliente = require("./Cliente")

//Creamos la clase que va a heredar del model y le pasamos un objeto vacío
class Compra extends Model {}

//Declaramos el modelo.
Compra.init({
    //vamos declarando los elementos que va a tener cada dato: id, nombre, edad etc. y sus restricciones en la bd
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    precio:{
        type:DataTypes.FLOAT, //Podemos indicar la longitud del string
        allowNull:false,
    },
    fecha:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    
},{
    sequelize,
    modelName:"compra", //Cuando se crea, lo pone en plural.
    timestamps: false, //Esto me quita las dos columnas automaticas que salen en mysql
})



Producto.belongsToMany(Cliente,{through: Compra}) //la relación de ambos se establece a través de la tabla "compra". Se me crea la tabla compra al guardar
Cliente.belongsToMany(Producto,{through: Compra})

//Si quiero cambiar las relaciones para que desde compra pueda sacar el id de productos o clientes:
Producto.hasMany(Compra);
Compra.belongsTo(Producto);
Cliente.hasMany(Compra);
Compra.belongsTo(Cliente);


//Rematamos poniendo el module que exporta la clase

module.exports = Compra;
