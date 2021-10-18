// Client facing scripts here

const createMenu = function (menu_items) {
return $(
  `
<div class="browse-all">
  <div class="browse-all-img">
      <div class="items item1">
          <img src="${menu_items.thumbnail_url}"
          alt="${menu_items.name}" width="300">
          <div class="buttons">
            <button class="cart-button">
              <span class="add-to-cart">Add to cart</span>
              <i class="fa fa-shopping-cart"></i>
              <i class="fa fa-square"></i>
            </button>
          </div>
          <p>${menu_items.name}</p>
          <p>${menu_items.description}</p>
          <p>$${menu_items.unit_price}</p>
      </div>
  </div>
</div>`
  )
}

const renderMenu = function(items){
  const containerMenu = $('#menu-items');
  items.forEach((menu_items) => {
    containerMenu.append(createMenu(menu_items))
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

const createOrder = function (order) {
  return (`
    <tr>
      <td>${order_items.name}</td>
      <td>${order_items.quantity}</td>
      <td>${order_items.total_price}</td>  //price*order.quantity
    </tr>
  `)
};

const renderOrder = function (orders) {
$("#order_items_container").append(
  `<table class="order-table-main">
    <thead>
    <tr>
      <th>Your order : </th>
      <th class='meal_prep_eta'></th>
    </tr>
    <tr>
      <th>Item name</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
    </thead>

    <tbody class='order-table-body'>
    </tbody>

    </table>`
);

// another logic here:


}
