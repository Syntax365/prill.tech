import path from "path";
import express from "express";

const PORT = process.env.HTTP_PORT || 8080;
const app = express();
const nodemailer = require("nodemailer");

var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "Client", "build")));

app.get("/api/", (req, res) => {
  res.send("API default route");
});

app.get("/api/test", (req, res) => {
  res.json({
    fullName: "Tyler Prill",
    integrationTest: "Success!",
  });
});

app.post("/send", function (req, res, next) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "info.prilltech@gmail.com",
      pass: "TP1304215;lkj56",
    },
  });

  const mailOptions = {
    from: "info.prilltech@gmail.com",
    to: "Syntax365@gmail.com",
    subject: `Urgent - Prill.Tech Contact Inquiry`,
    text: req.body.message,
    replyTo: req.body.email,
  };

  transporter.sendMail(mailOptions, function (err, res) {
    if (err) {
      console.error("there was an error sending email: ", err);
    } else {
      console.log("Email Successfully Sent: ", mailOptions);
    }
  });
  res.send("Completed post");
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/Client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});
