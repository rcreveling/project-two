$(document).ready(function() {
    // blogContainer holds all of our posts
    var activityContainer = $(".activity-container");
    var activities;

      // This function grabs posts from the database and updates the view
  function getActivities() {
    $.get("/api/activities",function(data) {
      console.log("Activities", data);
      activities = data;
      if (!activities || !activities.length) {
        displayEmpty();
      }
      else {
        initializeRows();
      }
    });
  }

    // Getting the initial list of posts
    getActivities();
    // InitializeRows handles appending all of our constructed post HTML inside
    // blogContainer
    function initializeRows() {
      activityContainer.empty();
      var activitiesToAdd = [];
      for (var i = 0; i < activities.length; i++) {
        activitiesToAdd.push(createNewRow(activities[i]));
      }
      activityContainer.append(activitiesToAdd);
    }

});