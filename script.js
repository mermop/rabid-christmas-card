
//score game based on number of hugs
//let people steal a bike but take a point off. and don't give the point back if they give the bike back: "That won't ASSUAGE your CONSCIENCE."

//location



//object


//npc
var score = 0;
var turn_count = 0;
var current_location = locations.outside;

function computer_print(response) {
	$("#history").append('<div class="computer-response">' + response + '</div>')
}

function Walk (direction) {
	var directions = ["north", "south", "east", "west"];
	if(directions.indexOf(direction) > -1) {
		return ("walking " + direction)
	}
	else {
		return ("invalid direction")
	}
}

function Hug (recipient) {
	return ("hugging " + recipient)
}

function Take (object) {
	return ("taking " + object)
}

function Kill (victim) {
	return ("killing " + victim)
}

function check_for_verbs(response) {
	if (response.substring(0,2) == "go") {
    	return Walk(response.substr(3));
	}
	if (response.substring(0,4) == "walk") {
    	return Walk(response.substr(5));
	}
	if (response.substring(0,3) == "hug") {
		return Hug(response.substr(4));
	}
	if (response.substring(0,7) == "embrace") {
		return Hug(response.substr(8));
	}
	if (response.substring(0,4) == "take") {
		return Take(response.substr(5));
	}
	if (response.substring(0,3) == "get") {
		return Take(response.substr(4));
	}
	if (response.substring(0,7) == "pick up") {
		return Take(response.substr(8));
	}
	if (response.substring(0,4) == "kill") {
		return Kill(response.substr(5));
	}
	if (response.substring(0,6) == "murder") {
		return Kill(response.substr(7));
	}
	else {
		return false;
	}
}


function turn(response) {
    $("#history").append('<div class="human-response"> >' + response + '</div>') //reprint response
    $('#response').val(""); //clear response box
    turn_count ++;
    var check_response = current_location.commands.indexOf(response);
    if(check_response > -1) {
    	computer_print("You head " + current_location.commands[check_response] + " to " + current_location.name + ".")
	    current_location = locations.stairs;
	    computer_print(current_location.description);
	    score ++;
    }
    else {
	    if(check_for_verbs(response) === false){
		    computer_print("I don't know what '" + response + "' means. I hope it isn't anything rude.")
	    }
	    else {
	    	computer_print(check_for_verbs(response));
	    }
    }
    computer_print("Your score is " + score + ".");
    computer_print("This is turn " + turn_count + ".")
    computer_print("You are at " + current_location.name);
}

//score


$("#response").keyup(function(event){
    if(event.keyCode == 13){
    	turn($('#response').val())
    }
});