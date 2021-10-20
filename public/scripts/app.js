// Client facing scripts here
const addCart = function (id, name, description, unitPrice, thumbnail) {
  console.log('id', id);
  console.log('unitPrice', unitPrice);
  console.log('description', name);
  console.log('description', description);
  console.log('description', thumbnail);
  let products = [];
  if (localStorage.getItem('products')) {
    products = JSON.parse(localStorage.getItem('products'));
  }
  products.push({ 'productId': id, 'productName': name, 'productDescription': description, 'productUnitPrice': unitPrice, 'productThumbnail': thumbnail });
  localStorage.setItem('products', JSON.stringify(products));
}

const createMenu = function (menu_items) {
  const $body = $(document.body);
  const isSignIn = $body.data('is_sign_in');
  console.log('menu_items', typeof menu_items.name);
  return $(
    `
<div class="browse-all">
  <div class="browse-all-img">
      <div class="items item1">
          <img src="${menu_items.thumbnail_url}"
          alt="${menu_items.name}">
          <div class="item-info">
          <p>Item ID ${menu_items.id}</p>
          <p>${menu_items.name}</p>
          <p>${menu_items.description}</p>
          <p>$${menu_items.unit_price}</p>
          </div>
          <div class="buttons ${isSignIn ? 'afterSignUp' : 'beforeSignUp'}">
            <button onclick="addCart(${menu_items.id}, \'${menu_items.name}\', \'${menu_items.description}\', ${menu_items.unit_price}, \'${menu_items.thumbnail_url}\')">
              <span>Add to cart</span>
            </button>
          </div>
      </div>
  </div>
</div>
  `)
}


const renderMenu = function (items) {
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
    renderMenu(response.menu_items);
  })
  
  // $.ajax({
  //   method: "POST",
  //   url: "/order_items"
  // }).done((response) => {
  //   renderOrdersInCart(response.order_items)
  // })
});

const createOrder = function (order_items) {
  // const orderParsed = JSON.parse(order_items);
  return (`
    <tr>
      <td>${order_items.name}</td>
      <td>${order_items.quantity}</td>
      <td>${order_items.total_price}</td>
    </tr>
  `)
};

const renderOrdersInCart = function (items) {
  const containerCart = $('#order-items');
  console.log('items', items);
  containerCart.append(createOrder(order_items));
}

// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/order_items"
//   }).done((response) => {
//     renderOrdersInCart(response.order_items)
//   })
// });
