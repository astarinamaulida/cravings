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
app.use(cookieSession({
  name: 'user_id',
  keys: ['a long long hard to crack key', 'a much longer key to crack']
}));



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
app.use("/users", usersRoutes(db));
// app.use("/api/orders", ordersRoutes(db));
app.use("/menu_items", menu_itemsRoutes(db));
app.use("/order_items", order_itemsRoutes(db));
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file! Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  const user = req.session.user_id;
  const templateVars = { user };
  res.render("index", templateVars);
});

app.get("/order_signup", (req, res) => {
  const templateVars = { user: null };
  res.render("order_signup", templateVars);
});

app.get("/order_menu", (req, res) => {    ///need to change (for order_items) the name of the endpoint accordingly our routes above
  const user = req.session.user_id;
  const templateVars = { user };
  res.render("order_menu", templateVars);
})

app.get("/cart", (req, res) => {
  const user = req.session.user_id;
  const templateVars = { user };
  if (!user) {
    return res.redirect('/order_signup');
  }
  res.render("cart", templateVars);
});
// app.get("/cart", (req, res) => {
//   res.render("cart");
// })

// POST ADD TO CART BUTTON TO CHECKOUT CART (USING NEW PATH ORDER_ITEMS SO IT WON'T DISTURB ORDER_INDEX)

app.post("/order_add_cart", (req, res) => {
  console.log("helooow", req.body)
  const user_id = req.session.user_id;
  if (!user_id) {
    res.redirect("/order_index");
  }
  if (carts[user_id]) {
    carts[user_id].push(req.body.item)
  }
  else {
    carts[user_id] = [req.body.item]
  }
});

app.get("/order_add_cart", (req, res) => {
  const users = req.session.user_id;
  if (users) {
    return res.render("/order_add_cart");
  }
  else {
    return res.render("/order_signup")
  }
})

/// route for order_items:
// app.get("/order_items", (req, res) => {

// }

// Twilio API


// const accountSid = 'AC0f80fa6f58ec1e2f3fe0be5b80521f83'; //PUT YOUR SID in ""
// const authToken = '418f10c55eab8aaf3ee77bca3828f1b1'; //PUT YOUR Token in ""
// const client = require('twilio')(accountSid, authToken);


// Checkout page
app.get("/checkout", (req, res) => {
  res.render("checkout");
})

app.post("/checkout", (req, res) => {
  console.log(req.params)
  console.log(req.body)

  // Send SMS to restaurant through Twilio
  client.messages
  .create({
      body: 'You have a new order. Please check your order in our website.Cravings Team.',
      from: '+12494881210',
      to: '+14379220404'
  })
  .then(message => console.log(message.sid))
  .catch(console.error)
  .done();

  // Send SMS to customer through Twilio
  client.messages
  .create({
      body: 'Thank you for ordering from Cravings. Your order will be ready in 10 min.',
      from: '+12494881210',  // from TWilio phone
      to:  `+${req.body.phone}`//`+${document.getElementById('phone').value}`   // put your phone to test it
  })
  .then(message => {
    console.log(message.sid)
    const phone = req.body.phone;
    console.log('phone', phone);
  })
  .catch(err => {
    console.log('error', error);
    res.redirect('/');
  })
  .done();

  res.redirect("/");
  req.session = null;
  res.redirect("/");
})



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
