// load
$(function() {
	// click button
	$("#submit").on("click", function() {
		// prevent default
		event.preventDefault();

		// users input
		var burgerName = $("#name").val().trim();
		console.log(burgerName);

		if (burgerName == "") {
			// user must input if not error is thrown
			alert("What would you like to order?");
		} else {
			$.ajax("/api/burgers", {
	      		type: "POST",
	      		data: {
	      			burgerName: burgerName
	      		}
	    	}).then(function(response) {
	        	// reload to see new 
	        	location.reload();
	      	});
		}
	});

	// eat burger
	$(".eaticon").on("click", function() {
		var id = $(this).data("id");

		$.ajax("/api/burgers/" + id, {
      		type: "PUT",
      		data: {
      			devoured: true
      		}
    	}).then(function() {
       		// reload for change
	        location.reload();
      	});
	});

	// order new burger
	$(".waitericon").on("click", function() {
		var id = $(this).data("id");

		$.ajax("/api/burgers/" + id, {
      		type: "PUT",
      		data: {
      			devoured: false
      		}
    	}).then(function() {
       		//reload for change
	        location.reload();
      	});
	});
});