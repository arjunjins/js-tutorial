const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.get("/", (req, res) => {
  let resp = {
    firstName: "Arjun",
    lastName: "Jins",
    age: 23,
  };
  res.json(resp);
});

app.post("/submitDetails", (req, res) => {
  const data = req.body;
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const element = data[key];
      console.log(element);
    }
  }

  // Process the data and send a response
  res.send("Data received successfully!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
