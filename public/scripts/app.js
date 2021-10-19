// Client facing scripts here

const createMenu = function (menu_items) {
  // console.log(menu_items);
return $(
  `
<div class="browse-all">
  <div class="browse-all-img">
      <div class="items item1">
          <img src="${menu_items.thumbnail_url}"
          alt="${menu_items.name}" width="300">
          <div class="item-info">
          <p>${menu_items.name}</p>
          <p>${menu_items.description}</p>
          <p>$${menu_items.unit_price}</p>
          </div>
          <div class="buttons afterSignUp beforeSignUp">
            <button class="cart-button">
              <span class="add-to-cart">Add to cart</span>
            </button>
            <input type="hidden" name="item" value="${menu_items.id}">
          </div>
      </div>
  </div>
</div>`
  )
}

const addCartToggle = function (id) {
  const afterSignUp = $('.afterSignUp');
  const beforeSignUp = $('.beforeSignUp');
  if (req.session.user_id === id) {
    return $('.buttons').toggleClass('afterSignUp');
  } else {
    return $('.buttons').toggleClass('beforeSignUp');
  }
}



const renderMenu = function(items){
  const containerMenu = $('#menu-items');
  // console.log(items);
  items.forEach((menu_items) => {
    containerMenu.append(createMenu(menu_items));
    addCartToggle;
  })
}

$(() => {
  $.ajax({
    method: "GET",
    url: "/menu_items"
  }).done((response) => {
    renderMenu(response.menu_items)
  })

});


// do we need render users???
// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((response) => {

//     console.log(response.rows);
//     response.rows;
//   })
// });

//////////// ADD TO CART ////////////

const createOrder = function (order) {
  return (`
    <tr>
      <td>${order_items.name}</td>
      <td>${order_items.quantity}</td>
      <td>${order_items.total_price}</td>  //price*order.quantity
    </tr>
  `)
};


const renderOrder = function(items){
  const containerOrder = $('#order_items');
  // console.log(items);
  items.forEach((order_items) => {
    containerOrder.append(createOrder(order_items))
  })
}

$(() => {
  $.ajax({
    method: "GET",
    url: "/order_items"
  }).done((response) => {
    renderOrder(response.order_items)
  })

});


// const renderOrder = function (orders) {
// $("#order_items_container").append(
//   `<table class="order-table-main">
//     <thead>
//     <tr>
//       <th>Your order : </th>
//       <th class='meal_prep_eta'></th>
//     </tr>
//     <tr>
//       <th>Item name</th>
//       <th>Quantity</th>
//       <th>Price</th>
//     </tr>
//     </thead>

//     <tbody class='order-table-body'>
//     </tbody>

//     </table>`
// );

// // another logic here:



// }
