// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure

const { Router } = require('express');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

module.exports = (client,db) {

  // for rest:
  Router.post("/",(req,res) =>{
    let query = `SELECT orders.id, order_items.menu_item_id, order_items.quantity  FROM order_items JOIN orders ON order_id = orders.id
    WHERE orders.id = (SELECT orders.id FROM orders ORDER BY orders.id DESC LIMIT 1);`
      db.query(query)
      .then(data => {
        // yourOrder



        client.messages
        .create({
          body: `You received  order: ${} .`,
          from: '+12223334455',
          to: '+19998887766'
        })
        .then(message => console.log('MESSAGE WAS SENT', message.sid))
      });


  })


  // for client :
  router.post('/sms-response', (req, res) => {
    let query = `SELECT phone, orders.id FROM users JOIN orders on users.id = user_id ORDER BY orders.id DESC LIMIT 1;`
      db.query(query)
      .then(data => {



      })

  })

  return router;
}






// test template from TWILIO website:

// client.messages
//   .create({
//      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//      to: '+14379228484',  //process.env.MY_PHONE_NUMBER,
//      from: '+12494881210'

//    })
//   .then(message => console.log(message.sid));
