//database.js file

// const menu_items = require(‘./json/menu_items.json’);
// const users = require(‘./json/users.json’);
// const orders = require(‘./json/orders.json’);
// const order_items = require(‘./json/menu_items.json’);
// const order_items = require(‘./json/order_items.json’);




const { Pool } = require('pg');
const pool = new Pool({
 user: 'vagrant', //'labber'
 password: '123', //'labber'
 host: 'localhost', //'localhost'
 database: 'cravingsdb'
});


// run from  db/database.js

// need to wrap it and export it:
pool.query(`
SELECT id, name, email
FROM users
LIMIT 3;
`)
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack));

// need to wrap it and export it:
pool.query(`
SELECT id, name, description
FROM menu_items;
`)
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack));



const getUserByEmail = function (email, db) {
  return db.query(`SELECT * FROM users
  WHERE users.email = $1;`, [email])
    .then(res => res.rows)
    .catch(err => console.error(err));
}
exports.getUserByEmail = getUserByEmail;



 const getAllMenu = function(menu) {
   return pool
    .query(`SELECT * FROM menu_items;`, [menu])
    .then((res) => res.rows)
    .catch((err) => err.message)
 };
exports.getAllMenu = getAllMenu;









