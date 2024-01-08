const Login = require("../models/Login");
const { response, request } = require("express");

const ObtenerUsuarios = async (req = request, res = response) => {
  let login = await Login.find();
  login.reverse();

  try {
    res.json({ login });
  } catch (error) {
    return res.status(404).json({
      msg: "Error, no se han encontrado reportes ",
    });
  }
};

const CrearUsuario = async (req = request, res = response) => {
  const { Billetera, Nombre, Apellido, Pais, Telefono } = req.body;

 if (Billetera === "") {
    delete req.body.Billetera;
  } 

const validarBilletera = await Login.findOne({
    Billetera: Billetera,
  });


  
  if (validarBilletera) {
    return res.status(401).json({
      msg: "Correo o Billetera ya existe",
    });
  }

  try {
    const login = new Login(req.body);
    await login.save();

    res.json({
      msg: "Usuario Registrado Correctamente",
    });
  } catch (error) {
    return res.status(404).json({
      msg: "Error, no se pudo crear el usuario ",
    });
  }
};

const ActualizarUsuario = (req = request, res = response) => {
  res.json({
    msg: "Hola mundo",
  });
};

const EliminarUsuario = (req = request, res = response) => {
  res.json({
    msg: "Hola mundo",
  });
};

module.exports = {
  ObtenerUsuarios,
  CrearUsuario,
  ActualizarUsuario,
  EliminarUsuario,
};
