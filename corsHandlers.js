function CORSHandler(req, res, next) {
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
    "Access-Control-Allow-Origin": "*",
  });

  if (req.method === "OPTIONS") {
    res.send();
  } else {
    next();
  }
}

module.exports = CORSHandler;
