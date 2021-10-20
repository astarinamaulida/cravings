const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/order_index", (req, res) => {
    let query = `SELECT *, menu_items.name FROM orders_items
    JOIN orders ON orders.id = order_id
    JOIN menu_items ON menu_items.id=menu_items_id
    JOIN users ON users.id = user_id
    WHERE users.phone = $1
    ;`;
    let param = [req.session.userCookie]
    console.log(query, param);
    db.query(query, param)
      .then(data => {

        const order_items = data.rows;
        res.json({ order_items });
        console.log(order_items)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post('/order_index', (req, res) => {
    console.log('req.body', req.body);
    const getItem = function (item) {
      return db
        .query(`SELECT * FROM menu_items WHERE id = $1`, [item])
        .then((result) => {
          console.log(result.rows);
          return result.rows[0];
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    const item = req.body.item;
    getItem(item).then((newItem) => {
      console.log('newItem', newItem);
      res.redirect("/order_index");
    })
  })
  return router;
};
