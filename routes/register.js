var express = require("express");
var router = express.Router();
const data = require("../data/data");

router.post("/", function (req, res) {
  /**
   * @Nikhil
   * I have completed some of the basic functionality to get you started with.
   * There are still many changes to be made.
   * However this can be used to understand how data is saved.
   * Here we are saving data in JS object(basically in memory). But in really applclication data will be saved in database.
   *
   * TODO: give appropriate name for userSaveDataExample and modify userObj if required
   * TODO: add functionality to check for duplicate users. send appropriate message if user already registred.
   */
  const userObj = {
    username: req.body.username,
    password: req.body.password,
    contactNo: req.body.contactNo,
    address: req.body.address,
  };
  data.userSaveDataExample.push(userObj);
  res.send(data.registerSuccessMessage);
});

router.get("/allUsers", function (req, res) {
  res.json(req.body.userSaveDataExample);
});

module.exports = router;
