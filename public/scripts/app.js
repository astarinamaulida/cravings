// Client facing scripts here

const createMenu = function (menu_items) {
  const $body = $(document.body);
  const isSignIn = $body.data('is_sign_in');
return $(
  `
<div class="browse-all">
  <div class="browse-all-img">
      <div class="items item1">
          <img src="${menu_items.thumbnail_url}"
          alt="${menu_items.name}">
          <div class="item-info">
          <p>${menu_items.name}</p>
          <p>${menu_items.description}</p>
          <p>$${menu_items.unit_price}</p>
          </div>
          <div class="buttons ${isSignIn ? 'afterSignUp' : 'beforeSignUp'}">
          <form method="POST" action="/order_items/order_index">
            <button class="cart-button" type="submit">
              <span class="add-to-cart">Add to cart</span>
            </button>
            <input type="hidden" name="item" value="${menu_items.id}">
          </form>
          </div>
      </div>
  </div>
</div>`
  )
}



const renderMenu = function(items){
  const containerMenu = $('#menu-items');
  // console.log(items);
  items.forEach((menu_items) => {
    containerMenu.append(createMenu(menu_items));
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

const createOrder = function (order) {
  return (`
    <tr>
      <td>${order_items.name}</td>
      <td>${order_items.quantity}</td>
      <td>${order_items.total_price}</td>  //price*order.quantity
    </tr>
  `)
};


