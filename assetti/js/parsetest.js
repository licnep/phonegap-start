Parse.initialize("l0lG8g59enbNNwZauQl8OheOaepjnViy0aLJV384", "21PFz7R1ipwKuHok9IsXL2d7Dg4Qvuj4Rm8NIKXY");


/*var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}, {
  success: function(object) {
    alert("yay! it worked");
  }
});*/


function upload() {

   var serverUrl = 'https://api.parse.com/1/files/asdasd.jpg';

	//immagine = document.getElementById("cbook").toDataURL('image/jpeg');
	var img = new Image();
	img.id = "pic"
	img.src = document.getElementById("cbook").toDataURL('image/png');
	//document.getElementById('image_for_crop').appendChild(img);	

	console.log(img);
	return;
   $.ajax({
      type: "POST",
      beforeSend: function(request) {
         request.setRequestHeader("X-Parse-Application-Id", 'l0lG8g59enbNNwZauQl8OheOaepjnViy0aLJV384');
         request.setRequestHeader("X-Parse-REST-API-Key", '8JDKWbfD80w2J776K1s6lHlMPyRYIyMlqt4tymos');
         request.setRequestHeader("Content-Type", 'image/png');
      },
      url: serverUrl,
      data: img,
      processData: false,
      contentType: false,
      success: function(data) {
		console.log(data);

		//save_file_object(data);

			/*
         // save result from Parse local storage, so we can use it later
         localStorage.setItem('parse_file_name', data.name);
         localStorage.setItem('parse_url', data.url);
                  
                  // this is actual file name we uploaded, which is different from name Parse sends us bak
         localStorage.setItem('file_name', file.name);

         // OPTIONAL: add service to save file name/URL to a list
		*/
      },
      error: function(data) {
         var obj = jQuery.parseJSON(data);
         alert(obj.error);
      }
   });
	alert('uploaded');
}

function save_file_object(data) {
	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	testObject.save(data, {
	  success: function(object) {
		alert("yay! it worked");
	  }
	});
}
