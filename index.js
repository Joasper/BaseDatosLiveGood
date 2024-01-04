const express = require("express");
const bodyParser = require("body-parser");

const app = express();
require("dotenv").config();
const { dbConecction } = require("./Database/config");
const cors = require("cors");

app.use(cors());

app.use(express.static("Public"));

dbConecction();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/usuario", require("./Routes/Login"));

app.listen(process.env.PORT, () => {
  console.log("Servidor montado");
});
