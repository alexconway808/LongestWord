(function(){

	var user_input = document.getElementById("user_input");
	var button = document.getElementById("find");
	var answer = document.getElementById("answer");

	button.onclick = function (){
		var string = user_input.value;	
		var string_array = string.split(" ");
		string_array.sort(function(a, b) {
	    	return b.length - a.length;
		});

		answer.innerHTML = "The longest word is " + (string_array[0]);
	};

})();


