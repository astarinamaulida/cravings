

$(() => {
  const populateCart = () => {
    let total = 0;
    let products = JSON.parse(localStorage.getItem('products'));
    for (const obj of products) {
      console.log('obj', obj);
      let container = `
        <div class="card mb-3" style="max-width: 540px;" id="${obj.productId}">
        <div class="row g-0">
          <div class="col-md-4 cart-imgs">
            <img src="${obj.productThumbnail}" class="img-fluid rounded-start" alt="${obj.productName}" width="300">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Item: ${obj.productName}</h5>
              <p class="card-text">${obj.productDescription}</p>
              <p class="card-text">Unit price: $${obj.productUnitPrice}</p>
            </div>
          </div>
        </div>
      </div>
                `
      $("#order-items").append(container);
      total = total + parseFloat(obj.productUnitPrice)
      $(".totals-value").html(total);
    }

  }

  // const removeItem = function (id) {
  //   console.log('id', id);
  //   let products = [];
  //   if (localStorage.getItem('products')) {
  //     products = JSON.parse(localStorage.getItem('products'));
  //   }
  //   for (const obj of products) {
  //     if (obj.productId === id) {
  //       $(`#${id}`).remove();
  //     }
      
  //     let total = $(".totals-value").val();
  //     console.log('total', total);
  //     total = total - parseFloat(obj.productUnitPrice)
  //     $(".totals-value").html(total);
  //   }
  //   localStorage.setItem('products', JSON.stringify(products));
  // }

  // const removeItem = function () {
  //   $("#click-to-remove").click(function (event) {
  //     event.preventDefault();
  //     console.log('clicked');
  //     const itemId = $(event.target.value);
  //     console.log('itemId', itemId);
  //     let products = JSON.parse(localStorage.getItem('products'));
  //     $(this).parent().parent().parent().parent().remove();

  //     total = total - parseFloat(cart[itemId].productUnitPrice)

  //     $(".totals-value").html(total)
  //     delete products[itemId]


  //     localStorage.setItem("products", JSON.stringify(products))
  //   })
  // }


  populateCart();
  removeItem();
})