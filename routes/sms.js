// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure

const { Router } = require('express');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const sendSMS = (from,to,body) =>{

  client.messages
  .create({
    body ,
    from ,
    to
  })
  .then(message => console.log('MESSAGE WAS SENT', message.sid))


}

module.exports = sendSMS;










///////////////

// module.exports = (client,db) => {

//   // for rest:
//   router.post("/",(req,res) =>{
//     let query = `SELECT orders.id, order_items.menu_item_id, order_items.quantity  FROM order_items JOIN orders ON order_id = orders.id
//     WHERE orders.id = (SELECT orders.id FROM orders ORDER BY orders.id DESC LIMIT 1);`
//       db.query(query)
//       .then(data => {
//         // yourOrder
//         let newOrderArr = [];
//         let newOrder = data.rows[0].id
//         console.log('newOrder!!!! : ',newOrder);
//         for (let item in data.rows) {
//           let newMenu = data.rows[item].menu_item_id;
//           let newQuantity = data.rows[item].quantity;

//           newOrderArr.push(`Menu: ${newMenu}, Quantity: ${newQuantity}`);
//         }
//           console.log('newOrder!!!! : ',newOrderArr);
//           let menuTotalStr = newOrderArr.join(',')

//            let newOrderMsg = `New order is: ${newOrder}. Order includes: ${menuTotalStr}`
//         console.log('newordderMsg !!!',newOrderMsg)

//         client.messages
//         .create({
//           body: `You received  order: ${newOrderMsg} .`,
//           from: '+12494881210',
//           to: '+14379228484'
//         })
//         .then(message => console.log('MESSAGE WAS SENT', message.sid))
//       });


//   })

//   for client :
//   router.post('/sms-response', (req, res) => {
//     let query = `SELECT phone, orders.id FROM users JOIN orders on users.id = user_id ORDER BY orders.id DESC LIMIT 1;`
//       db.query(query)
//       .then(data => {
//         const userPhone = data.rows[0].phone;
//         const twiml = new MessagingResponse();

//         const newReply = req.body.Body; // not sure

//         const params = [newReply,data.rows[0].id];

//         let replyQuery = `SELECT user_id,meal_prep_eta  FROM orders JOIN users ON users.id = user_id ORDER BY user_id LIMIT 1;`   // its hardcoded time from DB should be updated somehow
//           db.query(replyQuery,params);

//           twiml.message({
//             to: `+1${userPhone}`
//           }, `Your order will be prepared in ${replyQuery} minutes`);
//         res.writeHead(200, {
//           'Content-Type': 'text/xml'
//         });
//         res.end(twiml.toString());

//       })

//   })

//   return router;
// }







// test template request from TWILIO website:

// const testSMS = (newOrderMsg)=>{
//   console.log("@@@@@@@@",newOrderMsg);
//   client.messages
//         .create({
//           body: `You received  order: ${newOrderMsg} .`,
//           from: '+12494881210',
//           to: '+14379220404'
//         })
//         .then(message => console.log('MESSAGE WAS SENT', message.sid))

// }

// testSMS('234324111!!!!!@@@@@@@')


/// test template for response (TWILIO website)
// const http = require('http');
// const express = require('express');
// const MessagingResponse = require('twilio').twiml.MessagingResponse;

// const app = express();

// app.post('/sms', (req, res) => {
//   const twiml = new MessagingResponse();

//   twiml.message('The Robots are coming! Head for the hills!');

//   res.writeHead(200, {'Content-Type': 'text/xml'});
//   res.end(twiml.toString());
// });

// http.createServer(app).listen(1337, () => {
//   console.log('Express server listening on port 1337');
// });
