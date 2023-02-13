const apirouter = require("express").Router();

const clientesrouter = require("./clienteRouter")
const productosrouter = require("./productoRouter")
const proveedorrouter = require("./proveedorRouter")
const comprasrouter = require("./compraRouter")


apirouter.use("/clientes", clientesrouter)
apirouter.use("/productos", productosrouter)
apirouter.use("/proveedores", proveedorrouter)
//Quito la ruta de compras porque sino me peta.
apirouter.use("/compras", comprasrouter)





module.exports = apirouter;