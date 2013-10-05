Parse.initialize("cq5eI40dq1iNASeMmnsDRHKFgIsd8O5jKr4xNIEr",
	"OuqOwZKIJPj3bqoExrAjbrk3sP5WYEC6nt2VTNnW");

var currentUser = Parse.User.current();
if (currentUser){
	
}
else { // user is not logged in
	$("#login_submit").click(function(){
		Parse.User.logIn($("#username").val(),$("#password").val(), {
			success: function(user) {

			},
			error: function(user, error) {
				$("#error").html(error);
			}
		});
	});
}