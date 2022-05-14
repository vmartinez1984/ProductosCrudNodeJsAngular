//Rutas para producto

const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();
const productosController = require("../controllers/productosController")


router.post("/", productosController.crearProducto);

router.get("/", productosController.obtener)

router.put("/:id", productosController.actualizar)

router.get("/:id", productosController.obtenerPorId)

router.delete("/:id", productosController.borrar)

module.exports = router;