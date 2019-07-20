$(document).ready(function () {

    
    $("#form").on("submit", function handleFormSubmit(event) {
        event.preventDefault();
        // debugger;
        
        var newUser = {
            first_name: $("#first_name").val().trim(),
            last_name: $("#last_name").val().trim(),
            dob: $("#birthday").val().trim(),
            gender: $("#gender").val(),
            address: $("#address").val().trim(),
            email: $("#email").val().trim(),
            phone: $("#phone").val().trim(),
            password: $("#password").val().trim()
        }
        // var newUser = {
        //     first_name: "foo",
        //     last_name: "bar",
        //     phone: "603603",
        //     password: "abc123"
        // }

        $.post("/signup", newUser, function () {
            res.redirect('/login');
        });
    });

})
