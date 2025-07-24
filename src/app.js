const express = require("express");
const app = express();

//This will only handle GET call to /user
app.get("/user", function (req, res) {
  res.send({
    firstName: "K",
    lastName: "K",
  });
});

app.post("/user", function (req, res) {
  res.send("Data sent");
});

app.put("/user", function (req, res) {
  res.send("Data updated");
});

app.use("/user", function (req, res) {
  res.send("Hello Testing");
});

app.delete("/user", function (req, res) {
  res.send("Data deleted");
});

//This will match all HTTP method API calls to /test

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000");
});
