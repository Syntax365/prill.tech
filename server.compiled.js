"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = process.env.HTTP_PORT || 8080;
var app = (0, _express["default"])();
app.use(_express["default"]["static"](_path["default"].join(__dirname, "Client", "build")));
app.get("/api/", function (req, res) {
  res.send("API default route");
});
app.get("/api/test", function (req, res) {
  res.json({
    fullName: "Tyler Prill",
    integrationTest: "Success!"
  });
}); // Handles any requests that don't match the ones above

app.get("*", function (req, res) {
  res.sendFile(_path["default"].join(__dirname + "/Client/build/index.html"));
});
app.listen(PORT, function () {
  console.log("Server listening at port ".concat(PORT, "."));
});
