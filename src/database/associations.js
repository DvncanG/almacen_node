//IMPORTAMOS LOS MODELOS
const Producto = require("../database/models/Producto")
const Cliente = require("../database/models/Cliente")
const Proveedores = require("../database/models/Proveedores")


//RELACIÓN 1:N
//Un proveedor tiene muchos productos:
Proveedores.hasMany(Producto)
//Un producto tiene un proveedor
Producto.belongsTo(Proveedores)

//No olvidar poner el require de las asociaciones en el index

//RELACIÓN N/N. La hemos hecho en el modelo COMPRA
// Producto.belongsToMany(Cliente,{through: "compras"}) //la relación de ambos se establece a través de la tabla "compra". Se me crea la tabla compra al guardar
// Cliente.belongsToMany(Producto,{through: "compras"})

