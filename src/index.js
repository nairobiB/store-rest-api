const express = require("express");
const morgan = require("morgan");
const axios = require("axios");

const PORT = 4000;

const app = express();

app.use(morgan("dev"));

app.route("/").get(async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    const { data: todos } = response;

    return res.json({ todos });
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
});

app.listen(PORT, () => {
  console.log("Servidor iniciado en el puerto", PORT);
});
