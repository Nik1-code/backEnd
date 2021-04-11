const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

// user defined routes
const login = require("./routes/login");
const register = require("./routes/register");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:5000",
    credentials: true,
  })
);
app.use(express.json());

// routes
app.use("/login", login);
app.use("/register", register);

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });
// app.get("/users", (req, res) => {
//   res.sendFile(__dirname + "/users.json");
// });

// app.post("/", function (req, res) {
//   let num1 = Number(req.body.num1);
//   let num2 = Number(req.body.num2);
//   let result = num1 + num2;
//   res.send("welcome, the reuslt is  " + result);
// });

// app.post("/users", function (req, res) {
//   const newData = {
//     Age: req.body.age,
//     Name: req.body.name,
//     Email: req.body.email,
//     Password: req.body.password,
//   };
//   data.push(newData);
//   console.log(data);
// });

app.listen(5000, () => {
  console.log("server is up and running");
});
