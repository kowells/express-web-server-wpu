const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //res.sendFile("./index.html", { root: __dirname });
  const mahasiswa = [
    {
      nama: "ridwand",
      email: "ridwan@gmail.com",
    },
    {
      nama: "darmawan",
      email: "darmawan@gmail.com",
    },
    {
      nama: "ridwandwell",
      email: "wells@gmail.com",
    },
  ];
  res.render("index", {
    nama: "kowells",
    title: "Home Page",
    mahasiswa,
  });
});
app.get("/about", (req, res) => {
  res.render("about", { title: " About Page" });
});
app.get("/contact", (req, res) => {
  res.render("contact", { title: " Contact Page" });
});

app.get("/product/:id", (req, res) => {
  res.send(
    `Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`
  );
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`App running on  http://localhost:${port}`);
});
