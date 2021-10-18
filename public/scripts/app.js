// Client facing scripts here

const createMenu = function (menu_items) {
return (
  ` <article class= >
      <div class="card-header menu-title-price">

        <div class="menu_items-title" value="${menu_items.id}">
        ${menu_items.name}
        </div>

        <div class="menu_items-price">
        <h5>$${menu_items.price}</h5>
        </div>

      </div>

      <div class="menu_items__flex">
        <img class="menu_items-image inline" src="${menu_items.photo}" alt="cake">
        <div class="card-body">
        <p class="card-text ">
        ${menu_items.description}
        </p>

      </div>

      <div id='quantity' class="quantity">
      <input type="number" class="count" name="quantity" value="0" min='0'>
      </div>

  </div>

  </article>`
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
    url: "/api/menu_items"
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

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
