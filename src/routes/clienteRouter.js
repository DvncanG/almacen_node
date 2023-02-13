const clienteRouter = require("express").Router();

//NO OLVIDAR LLAMAR AL MODELO!!!!(linea de debajo)
const Cliente= require("../database/models/Cliente")




clienteRouter.get("/", async (req, res) => {
  const clientes = await Cliente.findAll(
  );
  res.json(clientes);
});


clienteRouter.post("/", async (req, res) => {
  const cliente = await Cliente.create(req.body);
  res.json(cliente);
});

module.exports = clienteRouter;
