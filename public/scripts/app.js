// Client facing scripts here
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/order_signup", (req, res) => {
    console.log(req.body);
    res.render('order_signup.ejs');
  });