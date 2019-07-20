
$(document).ready(
    const db = require('../../models');

function getInfo() {
    var currentevents = [];

    $.get("/api/events/", function (data) {
        console.log("running event search");
        console.log(data);

        for (var i = 0; i < data[0].length; i++) {
            currentevents.push(data.params.activityId);
        }
        console.log(currentevents);

    });

    function modalBuilder(type) {
        $.get();
        var dynamicCont = $("<div>", { class: "description" });
        var modalHeader = $("<div>", { class: "ui header" });
        var description = $("<p>");
        var date = $("<p>");
    }

    getInfo();
});




//
{
    /* < div class="ui modal" >
        <i class="close icon"></i>
        <div class="header">
            Active Activity
            </div>
        <div class="image content">
            <div class="ui medium image letter-image">
    
            </div>
            <div class="description">
                <div class="ui header">Swimming at the YMCA</div>
                <p>Enjoy a morning of swimming at the YMCA. Optional water aerobics class at 10am.</p>
                <p>Bus pick-up at 9:00am.</p>
                <p>Bus drop-off at 12:00pm.</p>
            </div>
        </div>
        <div class="actions">
            <div class="ui black deny button">
                Cancel
                </div>
            <div class="ui positive right labeled icon button" id="signup">
                Sign me up!
                    <i class="checkmark icon"></i>
            </div>
        </div>
    </div > */
}
//
