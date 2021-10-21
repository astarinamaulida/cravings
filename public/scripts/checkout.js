$(document).ready(function () {

  $("#submit").on('click', function (event) {
    event.preventDefault();
<<<<<<< HEAD
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
  })
  $("#submit").on('click', function (event) {
    event.preventDefault();
    let name = $("#name").val();
    $('#orderingMsg').empty();
    // need to have .empty(), else message will keep on printing out non-stop whenever client press submit button.
    $('#orderingMsg').append(`Hey ${name}, thank you for ordering from Cravings. Your order will be ready in 10 min.😉`);
  })
=======
      let name = $("#name").val();
     let phone = $("#phone").val();
<<<<<<< HEAD
     
=======

>>>>>>> testingGloria-cartAstaBranchesMerge
        $.ajax({
            method: 'POST',
            url: "/checkout",
            data: {
              name,
              phone
            }
        })
})
>>>>>>> 1aa6e6f18b80b2ef08e422e706bb0eeb02471599

});
