const express = require("express");
const app = express();
const CORSHandler = require("./corsHandlers");

// user defined routes
const login = require("./routes/login");
const register = require("./routes/register");

app.use(express.json());
app.use(CORSHandler);

// routes
app.use("/login", login);
app.use("/register", register);

app.listen(5000, () => {
  console.log("server is up and running");
});
