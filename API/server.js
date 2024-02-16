const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  let resp = {
    firstName: "Arjun",
    lastName: "Jins",
    age: 23,
  };
  res.json(resp);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
