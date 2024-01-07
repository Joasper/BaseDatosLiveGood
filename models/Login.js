const { Schema, model, models } = require("mongoose");

const LoginSchema = new Schema({
  Billetera: {
    type: String,
    unique: true,
    trim: true,
  },
  Correo: {
    type: String,
    unique: true,
    trim: true,
  },
  Nombre: {
    type: String,
    required: true,
    trim: true,
  },
  Apellido: {
    type: String,
    required: true,
    trim: true,
  },
  Telefono: {
    type: String,
    required: true,
    trim: true,
  },
  Pais: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = models.Login || model("Login", LoginSchema);
