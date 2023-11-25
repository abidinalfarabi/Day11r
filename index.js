//const express = require("express");
//const app = express();
//const port = 3000;

//app.get("/", (req, res) => {
//res.send("    Assalamualaikum!");
//});

//app.listen(port, () => {
//console.log(`Example app listening on port ${port}`);
//});
//

const express = require("express");
const path = require("path");
const { title } = require("process");
const app = express();
const port = 5000;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));

// set stastic file server
app.use(express.static("src/assets"));

// parsing data form client
app.use(express.urlencoded({ extended: false }));

// routing
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/testimonial", (req, res) => {
  res.render("testimonial");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/detail-project", (req, res) => {
  res.render("detail");
});
app.get("/blog", (req, res) => {
  res.render("blog");
});
app.post("/blog", (req, res) => {
  const { title, startDate, endDate, Description, Tecnhologies } = req.body;

  console.log(req.body);
  res.redirect("/");
});
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
