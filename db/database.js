//database.js file
// const menu_items = require(‘./json/menu_items.json’);
// const users = require(‘./json/users.json’);
// const orders = require(‘./json/orders.json’);
// const order_items = require(‘./json/order_items.json’);

// const { Pool } = require(‘pg’);
// const pool = new Pool({
//  user: 'labber',
//  password: 'labber',
//  host: 'localhost',
//  database: 'cravingsdb' ???
// });




const getAllMenu = function (menu) {
  return pool.query(`SELECT * FROM menu_items;
 `, [menu])
    .then(res => res.rows);
}
exports.getAllMenu = getAllMenu;




