const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res
    .status(200)
    .send("This site is currently under construction, come back soon!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
