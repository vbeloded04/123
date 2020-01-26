var menu = document.getElementById('menu');

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
        menu.style.marginRight = "2.75em";
    } else {
        x.className = "topnav";
        menu.style.marginRight = "1em";
    }
}

$(document).ready(function() {

	//E-mail Ajax Send
	$("contact_form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});