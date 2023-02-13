const productoRouter = require("express").Router();
 const Producto = require("../database/models/Producto");
const Proveedor = require("../database/models/Proveedores");


productoRouter.get("/", async (req, res) => {
  const allProducts = await Producto.findAll(
    // PARA QUE ME INCLUYA DATOS DE OTRA TABLA
    {include:"proveedor", 
    include: {
      model: Proveedor,
      attributes: ["nombre"],
    },
    attributes: ["nombre", "unidades"],}   
  );
  res.json(allProducts);
});


productoRouter.post("/", async (req, res) => {
  const producto = await Producto.create(req.body);
  res.json(producto);
});
/* productoRouter.patch("/:id", productoControllers.updateproducto);
productoRouter.put("/:id", productoControllers.updateproducto);
// productoRouter.delete("/:id", productoControllers.deleteproducto); */

 module.exports = productoRouter;
