const compraRouter = require("express").Router();
const Cliente = require("../database/models/Cliente");
const Producto = require("../database/models/Producto");
const Compra = require("../database/models/Compra");

compraRouter.get("/", async (req, res) => {
  const compras = await Compra.findAll({

    
    include:[{
      model:Producto, //Hay que importar el producto
      attributes:["nombre"]
    },
   {
      model:Cliente, //Hay que importar el producto
      attributes:["nombre"]
    }],

    //para que solo me muestre la fecha y el precio de la tabla

    attributes: ["fecha", "precio"]
  })
  res.json(compras);
});

compraRouter.post("/", async (req, res) => {
  const compra = await Compra.create(req.body);
  res.json(compra);
});

module.exports = compraRouter;
