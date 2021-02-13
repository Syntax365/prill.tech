import path from "path";
import express from "express";

const PORT = process.env.HTTP_PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, "Client", "build")));

app.get("/", (req, res) => {
  res.send("API default route");
});

app.get("/test", (req, res) => {
  res.json({
    fullName: "Tyler Prill",
    integrationTest: "Success!",
  });
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/Client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});
