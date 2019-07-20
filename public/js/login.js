$(document).ready(function () {

    $("#form").on("submit", function handleFormSubmit(event) {
        event.preventDefault();

        var loginInfo = {
            // fname: "foo",
            // lname: "bar",
            phone: $("#phone").val().trim(),
            password: $("#password").val().trim()
        }

        $.post("/login", loginInfo, function () {
            console.log("error if you get here");
        });
    });

})
