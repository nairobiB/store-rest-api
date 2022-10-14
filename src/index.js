const express = require("express");

const PORT = 4000;

const app = express();

app.route("/").get((req, res) => {
  return res.json({
    message: "Hello World",
  });
});

app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});
