// the app method accepts a fn to invoke on init unobtrusively 
var run = function(application) {
    if (navigator.userAgent.indexOf('Browzr') > -1) {
        // blackberry
        setTimeout(application, 250)	
    } else {
        // attach to deviceready event, which is fired when phonegap is all good to go.
        x$(document).on('deviceready', application, false);
    }
}

, display = function(id) {
	console.log('displaying ' + id);

	x$('.view').each(function(e, i) {
        x$(e).css({ 'display':'none' })
    });
	//x$('.view').css({ 'display':'none' });
	x$(id).css({ 'display':'block' });
}

//passing the function to run when it's ready
run(function() {
	//show the first window (login or register:)
	x$('#logorreg').css({ 'display':'block' });

	//handlers:
	/*x$('#register_button').on('touchstart', function () {
		display('#register');
		return false;
    });*/
	x$('#register_button').on('touchstart', function() {display('#register')} );
	x$('#tologorreg_button').on('touchstart', function() {display('#logorreg')} );
});

