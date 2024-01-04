const mongoose = require("mongoose");

const dbConecction = async () => {
  try {
    await mongoose.connect(process.env.DB_CONECTION);

    console.log("Base de datos montada");
  } catch (error) {
    console.log(error);
    throw new Error("Error al inicializar BD");
  }
};

module.exports = {
  dbConecction,
};
