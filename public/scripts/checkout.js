$(document).ready(function() {

  $("#submit").on('click', function(event) {
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
})

});
