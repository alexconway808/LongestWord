(function(){

	var user_input = document.getElementById("user_input");
	var button = document.getElementById("find");
	var string = user_input.value;	
	var string_array = string.split(" ");

	button.onclick = function (){
		string_array.sort(function(a, b) {
	    return b.length - a.length;
		});
	};
	
	alert(string_array[0]);
	

	// var user_input = document.getElementById("user_input");
	// var button = document.getElementById("find");
	// var string = "What is the longest"
	// var string_array = string.split(" ")

	// string_array.sort(function(a, b) {
	//     return b.length - a.length;
	// });

	// alert(string_array[0]);

})();