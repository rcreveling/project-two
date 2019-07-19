$(document).ready(function () {

    $("#form").on("submit", function handleFormSubmit(event) {
        event.preventDefault();
        var newUser = {
            fname: "foo",
            lname: "bar",
            phone: "1234",
            password: "abc123"
        }

        $.post("/signup", newUser, function () {
            console.log("done");
        });
    });

})
