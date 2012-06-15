function login() {

	var user = new Parse.User();
	user.set("username", "my name");
	user.set("password", "my pass");
	user.set("email", "email@example.com");

	// other fields can be set just like with Parse.Object
	user.set("phone", "415-392-0202");

	user.signUp(null, {
	  success: function(user) {
		// Hooray! Let them use the app now.
		alert('utente salvato');
	  },
	  error: function(user, error) {
		// Show the error message somewhere and let the user try again.
		alert("Error: " + error.code + " " + error.message);
	  }
	});
}
