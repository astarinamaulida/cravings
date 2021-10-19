// Client facing scripts here

const createMenu = function (menu_items) {
  const $body = $(document.body);
  const isSignIn = $body.data('is_sign_in');
  console.log($body.data());
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
            <button class="cart-button">
              <span class="add-to-cart">Add to cart</span>
            </button>
          </div>
      </div>
  </div>
</div>`
  )
}

const addCartToggle = function (id) {

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

const createOrder = function (order) {
  return (`
    <tr>
      <td>${order_items.name}</td>
      <td>${order_items.quantity}</td>
      <td>${order_items.total_price}</td>  //price*order.quantity
    </tr>
  `)
};


