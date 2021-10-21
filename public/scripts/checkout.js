$(document).ready(function() {

  $("#submit").on('click', function(event) {
    event.preventDefault();
    let name = $("#name").val();
    let phone = $("#phone").val();
        $.ajax({
            method: 'POST',
            url: "/checkout",
            data: $(this).serialize(),
            success: function() {
                localStorage.clear();
                window.location.href = "http://localhost:8080/index.js";
            }
        })
})

});
