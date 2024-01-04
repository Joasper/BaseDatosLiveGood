const { Router } = require("express");
const router = Router();
const {
  ActualizarUsuario,
  CrearUsuario,
  EliminarUsuario,
  ObtenerUsuarios,
} = require("../controllers/Login-Controller");

router.get("/", ObtenerUsuarios);
router.post("/", CrearUsuario);
router.put("/:id", ActualizarUsuario);
router.delete("/:id", EliminarUsuario);

module.exports = router;
