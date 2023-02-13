const proveedorRouter = require("express").Router();
const Proveedor = require("../database/models/Proveedores");
const Producto = require("../database/models/Producto");
const sequelize = require("../database/db");


proveedorRouter.get("/", async(req, res) => {
  const proveedores  = await Proveedor.findAll(
    {
      include:{
        model:Producto,
        attributes:["nombre", "precio"]
      },
      attributes:["nombre"]
    } 
  );
  res.json(proveedores);
});

// proveedorRouter.get("/", async(req,res)=>{
//   const [proveedores,metadata] = await sequelize.query("SELECT ")


// })


proveedorRouter.post("/", async (req, res) => {
  const proveedor = await Proveedor.create(req.body);
  res.json(proveedor);
});

 module.exports = proveedorRouter;
