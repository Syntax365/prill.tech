"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = process.env.HTTP_PORT || 8080;
var app = (0, _express["default"])();

var nodemailer = require("nodemailer");

var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(_express["default"]["static"](_path["default"].join(__dirname, "Client", "build")));
app.get("/api/", function (req, res) {
  res.send("API default route");
});
app.get("/api/test", function (req, res) {
  res.json({
    fullName: "Tyler Prill",
    integrationTest: "Success!"
  });
});
app.post("/send", function (req, res, next) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "info.prilltech@gmail.com",
      pass: "TP1304215;lkj56"
    }
  });
  var mailOptions = {
    from: "info.prilltech@gmail.com",
    to: "Syntax365@gmail.com",
    subject: "Urgent - Prill.Tech Contact Inquiry",
    text: req.body.message,
    replyTo: req.body.email
  };
  transporter.sendMail(mailOptions, function (err, res) {
    if (err) {
      console.error("there was an error sending email: ", err);
    } else {
      console.log("Email Successfully Sent: ", mailOptions);
    }
  });
  res.send("Completed post");
}); // Handles any requests that don't match the ones above

app.get("*", function (req, res) {
  res.sendFile(_path["default"].join(__dirname + "/Client/build/index.html"));
});
app.listen(PORT, function () {
  console.log("Server listening at port ".concat(PORT, "."));
});
