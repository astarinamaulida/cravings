// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const morgan = require("morgan");

const cookieSession = require('cookie-session');

//TWILIO SMS API:
// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);




// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const ordersRoutes = require("./routes/orders");
const menu_itemsRoutes = require("./routes/menu_items");
const order_itemsRoutes = require("./routes/order_items");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
// app.use("/api/orders", ordersRoutes(db));
app.use("/api/menu_items", menu_itemsRoutes(db));
app.use("/api/order_items", order_itemsRoutes(db));
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file! Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/order_signup", (req, res) => {
  res.render("order_signup");
/// do we need req.session UserCookie in here????

});

app.get("/order_menu", (req, res) => {    ///need to change (for order_items) the name of the endpoint accordingly our routes above
  res.render("order_menu");
})

app.post("/order_index", (req, res) => {
  console.log(req.body);
  console.log(req.params);
  res.render('order_index');
})


/// route for order_items:
app.get("/api/order_items", (req, res) => {
  // req.session.order_items = order_items;   ???? is expression correct ?
});


///LOGIN page? if we do sign up , then should be something like this :

// app.get("/login/:user_email", (req, res) => {
//   let userEmail = req.params.user_email;
//   if (getUserByEmail(userEmail, db)) {
//     req.session.userCookie = userEmail;
//     //console.log(req.session.userCookie);
//     res.redirect("/");
//   }
// });





app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
