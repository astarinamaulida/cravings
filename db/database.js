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

pool.query(`
SELECT id, name, email
FROM users
LIMIT 3;
`)
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack));




// const getAllMenu = function (menu) {
//   return pool.query(`SELECT * FROM users;
//  `, [menu])
//     .then(res => res.rows);
// }
// exports.getAllMenu = getAllMenu;









