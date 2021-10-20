

$(() => {
        
    const populateCart = () => {
        let total = 0;
        let products = JSON.parse(localStorage.getItem('products'));
        console.log('products', products);
        for (const obj of products) {
            console.log('obj', obj);
                let container = `
                <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4 cart-imgs">
            <img src="${obj.productThumbnail}" class="img-fluid rounded-start" alt="${obj.productName}" width="300">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${obj.productName}</h5>
              <p class="card-text">${obj.productDescription}</p>
              <p class="card-text">${obj.productUnitPrice}</p>
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
    populateCart();
})