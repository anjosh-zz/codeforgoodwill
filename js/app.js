var appKey = "cq5eI40dq1iNASeMmnsDRHKFgIsd8O5jKr4xNIEr";
var jsKey = "OuqOwZKIJPj3bqoExrAjbrk3sP5WYEC6nt2VTNnW";

Parse.initialize(appKey,
    jsKey);
$(document).ready(function() {
$("#register_button").click(function(){
        Parse.User.signUp($('#username').val(), $('#password').val(), {
        	nuggets: 0
        },{

			success: function(object) {
            window.location.replace("dashboard.html");
        },
        error: function(error) {
            alert(error.message);
        }

		});

  });


$("#login_button").click(function(){
Parse.User.logIn($('#username').val(), $('#password').val(), {

    		success: function(object) {
            window.location.replace("dashboard.html");
        },
        error: function(error) {
            alert(error.message);
        }

		});
})

var nuggets = JSON.parse(localStorage["Parse/" + appKey + "/currentUser"]).nuggets;
$("#nugget_count").html(nuggets);
})
