//database.js file

const { Pool } = require('pg');
const pool = new Pool({
 user: 'labber', //'labber'
 password: 'labber', //'labber'
 host: 'localhost', //'localhost'
 database: 'midterm'
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



////////// GET USER //////////

const getUserByEmail = function (email, db) {
  return db.query(`SELECT * FROM users
  WHERE users.email = $1;`, [email])
    .then(res => res.rows)
    .catch(err => console.error(err));
}
exports.getUserByEmail = getUserByEmail;


////////// GET MENU //////////

const getAllMenu = function (menu) {
  return pool.query(`SELECT * FROM menu_items;
 `, [menu])
    .then(res => res.rows);
}

 const getAllMenu = function(menu) {
   return pool
    .query(`SELECT * FROM menu_items;`, [menu])
    .then((res) => res.rows)
    .catch((err) => err.message)
 };
exports.getAllMenu = getAllMenu;



// comments.





