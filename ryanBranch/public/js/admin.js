$(document).ready(function() {
    // blogContainer holds all of our posts
    var activityContainer = $(".activity-container");
    var activities;

      // This function grabs posts from the database and updates the view
  function getActivities() {
    $.get("/api/activities/",function(data) {
      console.log("Activities", data);
        initializeRows();
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

    // This function constructs a post's HTML
  function createNewRow(activity) {
    var newActivityCard = $("<div>");
    newActivityCard.addClass("card");
    var newActivityCardHeading = $("<div>");
    newActivityCardHeading.addClass("card-header");
    var deleteBtn = $("<button>");
    deleteBtn.text("x");
    deleteBtn.addClass("delete btn btn-danger");
    var editBtn = $("<button>");
    editBtn.text("EDIT");
    editBtn.addClass("edit btn btn-default");
    var newActivityTitle = $("<h2>");
    var newActivityDate = $("<small>");
    
    var newActivityCardBody = $("<div>");
    newActivityCardBody.addClass("card-body");
    var newActivityBody = $("<p>");
    newAcivityTitle.text(activity.activity + " ");
    newActivityDescription.text(activity.description);
    var formattedDate = new Date(activity.createdAt);
    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    newActivityDate.text(formattedDate);
    newActivityTitle.append(newActivityDate);
    newActivityCardHeading.append(deleteBtn);
    newActivityCardHeading.append(editBtn);
    newActivityCardHeading.append(newActivityTitle);
    newActivityCardHeading.append(newActivityCategory);
    newActivityCardBody.append(newActivityBody);
    newActivityCard.append(newActivityCardHeading);
    newActivityCard.append(newActivityCardBody);
    newActivityCard.data("activity", activity);
    return newActivityCard;
  }

});