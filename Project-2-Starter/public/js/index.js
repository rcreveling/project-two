// Get references to page elements
var $activityText = $("#activity-text");
var $activityDescription = $("#activity-description");
var $submitBtn = $("#submit");
var $activityList = $("#activity-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveActivity: function(activity) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/activities",
      data: JSON.stringify(activity)
    });
  },
  getActivity: function() {
    return $.ajax({
      url: "api/activities",
      type: "GET"
    });
  },
  deleteActivity: function(id) {
    return $.ajax({
      url: "api/activities/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshActivities = function() {
  API.getActivity().then(function(data) {
    var $activities = data.map(function(activity) {
      var $a = $("<a>")
        .text(activity.activity)
        .attr("href", "/example/" + activity.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": activity.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $activityList.empty();
    $activityList.append($activities);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var activity = {
    activity: $activityText.val().trim(),
    description: $activityDescription.val().trim()
  };

  if (!(activity.activity && activity.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveActivity(activity).then(function() {
    refreshActivities();
  });

  $activityText.val("");
  $activityDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteActivity(idToDelete).then(function() {
    refreshActivities();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$activityList.on("click", ".delete", handleDeleteBtnClick);