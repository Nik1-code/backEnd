var express = require("express");
var router = express.Router();
const data = require("../data/data");

router.post("/", function (req, res) {
  /**
   * @Nikhil
   * Here we are useing hard-coded data for checking the credentials entered by user.
   * This should happen from the data entered by user during registration.
   * Currently newly registred users data.userSaveDataExample. This should be used to compare the data entered by user.
   *
   * TODO: Use data entered by user while registration to check login credentials
   */
  if (
    req.body.username === data.user.username &&
    req.body.password === data.user.password
  ) {
    res.json(data.loginSuccessMessage);
  } else {
    res.json(data.loginFailureMessage);
  }
});

module.exports = router;
