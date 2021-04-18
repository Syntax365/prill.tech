"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

require("regenerator-runtime/runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var s3Exports = require("./node_scripts/s3_getBucketData.js");

var PORT = process.env.HTTP_PORT || 8080;
var app = (0, _express["default"])();

var nodemailer = require("nodemailer");

var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-2"
});

var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(_express["default"]["static"](_path["default"].join(__dirname, "Client", "build")));
app.get("/api/", function (req, res) {
  res.send("API default route");
});
app.get("/api/test", function (req, res) {
  getAllS3Data(res);
});

function getAllS3Data(_x) {
  return _getAllS3Data.apply(this, arguments);
}

function _getAllS3Data() {
  _getAllS3Data = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
    var data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return s3Exports.getAllData();

          case 2:
            data = _context.sent;
            res.send(data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getAllS3Data.apply(this, arguments);
}

app.get("/api/fun-fact", function (req, res) {
  getAllS3Data(res);
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
  res.sendStatus(200);
}); // Handles any requests that don't match the ones above

app.get("*", function (req, res) {
  res.sendFile(_path["default"].join(__dirname + "/Client/build/index.html"));
});
app.listen(PORT, function () {
  console.log("Server listening at port ".concat(PORT, "."));
});
