$(document).ready(function () {
    catchEvents();
});


function catchEvents() {

    $("#getButton").click(function () {
        $.ajax({
            url: "/api/Values", success: function (values) {
                var output = "";
                jQuery.each(values, function (index, value) {
                    output += value.Id + " " + value.Description + "<br/>";
                });
                $("#placeholder").html(output);
            }
        });
    });


    $("#getValueButton").click(function () {
        $.ajax({
            url: "/api/Values/123", success: function (value) {
                $("#placeholder").html(value.Id + " " + value.Description);
            }
        });
    });

    $("#postButton").click(function () {
        var myObject =
        {
            "Id": 123,
            "Description": "MyDescription"
        }
        $.ajax({
            method: "POST",
            type: "JSON",
            data: myObject,
            url: "/api/Values", success: function (result) {
                $("#placeholder").html(result);
            }
        });
    });

    $("#putButton").click(function () {
        var myObject =
        {
            "Id": 456,
            "Description": "MyDescription"
        }
        $.ajax({
            method: "PUT",
            type: "JSON",
            data: myObject,
            url: "/api/Values/456", success: function (result) {
                $("#placeholder").html(result);
            }
        });
    });

    $("#deleteButton").click(function () {
        $.ajax({
            method: "DELETE",
            url: "/api/Values/5", success: function (result) {
                $("#placeholder").html(result);
            }
        });
    });

}
