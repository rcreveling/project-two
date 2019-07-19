$(document).ready(function () {
  console.log("admin.js is called!");
  // blogContainer holds all of our posts
  var activityContainer = $(".activity-container");
  $(document).on("click", "button.delete", handleActivityDelete);
  $(document).on("click", "button.edit", handleActivityEdit);
  var activities;

  // This function grabs posts from the database and updates the view
  function getActivities() {
    console.log("running GET!");
    $.get("/api/activities/", function (data) {
      console.log("Activities", data);
      activities = data;
      if (!activities || !activities.length) {
        displayEmpty();
      }
      else {
        initializeRows();
        console.log("hitting else");
      }
    });
  }

  // This function does an API call to delete posts
  function deleteActivity(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/activities/" + id
    })
      .then(function () {
        getActivities();
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
    var newActivityCard = $("<div>", { class: "ui form four columns", id: "" });
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
    var newActivityDescription = $("<div>");
    var newActivityCategory = $("<div>");

    var newActivityCardBody = $("<div>");
    newActivityCardBody.addClass("card-body");
    var newActivityBody = $("<p>");
    newActivityTitle.text(activity.activity + " ");
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

  // This function figures out which post we want to delete and then calls
  // deletePost
  function handleActivityDelete() {
    var currentActivity = $(this)
      .parent()
      .parent()
      .data("activity");
    deleteActivity(currentActivity.id);
  }

  // This function figures out which post we want to edit and takes it to the
  // Appropriate url
  function handleActivityEdit() {
    var currentActivity = $(this)
      .parent()
      .parent()
      .data("activity");
    window.location.href = "/addevent?activity_id=" + currentActivity.id;
  }

});