$(document).ready(function () {
    $(".ride-button").click(function () {
        var id = $(this).data("id");
        $.ajax("/api/rides/" + id, {
            type: "PUT"
        }).then(function () {
            location.reload();
        });
    });

    $("#new-ride").on("submit", function (e) {
        e.preventDefault();

        var newRide = {
            name: $("#ride-name").val().trim()
        };

        $.ajax("/api/rides", {
            type: "POST",
            data: newRide
        }).then(function () {
            console.log("Added new ride");
            location.reload();
        });
    });
});