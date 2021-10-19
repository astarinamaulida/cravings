/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();


module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
        console.log(users);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // Create a new user
  router.post('/order_signup', (req, res) => {
      const addUser = function (user) {
        return db
          .query(`INSERT INTO users (name, phone, is_restaurant_crew) 
            VALUES ($1, $2, $3)
            RETURNING *`, [user.username, user.phoneNumber, false])
          .then((result) => {
            req.session.userId = result.rows[0].id;
            return result.rows[0];
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
      const user = req.body;
      addUser(user);
      res.redirect("/order_index");
    })
  return router;
};
