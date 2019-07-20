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
        console.log("empty")
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
    var newActivityBody;
    var newActivityRow = $("<tr>", { class: "", id: "" });
    // newActivityCard.addClass("card");
    // var newActivityCardHeading = $("<tr>");
    // newActivityCardHeading.addClass("card-header");
    var deleteBtn = $("<button>", { class: "ui button", id: "delete", text: "x" });
    // deleteBtn.text("x");
    // deleteBtn.addClass("ui button");
    var editBtn = $("<button>", { class: "ui button", id: "edit", text: "EDIT", onclick: handleActivityEdit() });
    // editBtn.text("EDIT");
    // editBtn.addClass("ui button");
    var newActivityTitle = $("<td>", { dataLabel: "Activity" });
    var newActivityDate = $("<td>", { dataLabel: "Date" });
    var newActivityDescription = $("<td>", { dataLabel: "Description" });
    var newActivityCategory = $("<td>", { dataLabel: "Category" });

    // var newActivityCardBody = $("<div>");
    // newActivityCardBody.addClass("card-body");
    // var newActivityBody = $("<p>");
    newActivityTitle.text(activity.activity + " ");
    newActivityDescription.text(activity.description);
    var formattedDate = new Date(activity.createdAt);
    newActivityCategory.text(activity.type);
    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    newActivityDate.text(formattedDate);
    // newActivityTitle.append(newActivityDate);
    // newActivityRow.append(deleteBtn);
    // newActivityRow.append(editBtn);
    // newActivityRow.append(newActivityTitle);
    // newActivityRow.append(newActivityCategory);
    // newActivityCardBody.append(newActivityBody);
    // newActivityRow.append(newActivityCardHeading);
    // newActivityRow.append(newActivityCardBody);
    newActivityRow.data("activity", activity);
    newActivityRow.append(newActivityTitle).append(newActivityDescription).append(newActivityCategory).append(deleteBtn).append(editBtn);
    return $('#activityTable').append(newActivityRow);
    // console.log("here is the new row");
    // console.log(newActivityRow);
    // return newActivityRow;
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
    // window.location.href = "/addevent?activity_id=" + currentActivity.id;
  }

});