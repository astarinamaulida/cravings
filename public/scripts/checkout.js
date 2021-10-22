$(document).ready(function () {

  $("#submit").on('click', function (event) {
    event.preventDefault();
    let name = $("#name").val();
    let phone = $("#phone").val();
    $.ajax({
      method: 'POST',
      url: "/checkout",
      data: {
        name,
        phone
      }
    })
    // $('#orderCfm').empty();
    $('#orderCfm').append(`Hey ${name}, thank you for ordering from Cravings. Your order will be ready in 10 min. Your total: `);
  })
});
