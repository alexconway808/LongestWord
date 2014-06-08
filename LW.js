(function(){

	var user_input = document.getElementById("user_input");
	var button = document.getElementById("find");

	button.onclick = function (){
		var string = user_input.value;	
		var string_array = string.split(" ");
		string_array.sort(function(a, b) {
	    	return b.length - a.length;
		});
		alert(string_array[0]);
	};

})();