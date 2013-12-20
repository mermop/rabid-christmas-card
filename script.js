
//score game based on number of hugs
//let people steal a bike but take a point off. and don't give the point back if they give the bike back: "That won't ASSUAGE your CONSCIENCE."

var score = 0;
var turn_count = 0;
var current_location = locations.outside;

function computer_print(response) {
	$("#history").append('<div class="computer-response">' + response + '</div>');
}

function score_update(score) {
	$("#score").text("Score: " + score);
}

function turn_update(turn) {
	$("#turn").text("Turn: " + turn);
}

function Walk (dir) {
	var dirs = ["north", "south", "east", "west"];
	if(dirs.indexOf(dir) > -1) {
		var destination_location = current_location.directions[dir];
		if(destination_location == "nope") {
			return ("can't go there");
		}
		else {
		current_location = locations[destination_location];
		var what_to_return = "walking " + dir + " to " + current_location.name + ". " + current_location.description;
		if(current_location.objects) {
			for (var i = 0; i < current_location.objects.length; i++) {
				what_to_return = what_to_return + "There is a " + current_location.objects[i] + " here. ";
			}
		}
		if(current_location.npcs) {
			for (var i = 0; i < current_location.npcs.length; i++) {
				what_to_return = what_to_return + npcs[current_location.npcs[i]].name + " is here. ";
			}
		}
		return (what_to_return);
		}
	}
	else {
		return ("invalid direction");
	}
}

function Hug (recipient) {
	if(current_location.npcs) {
		if(current_location.npcs.indexOf(recipient) > -1) {
			if(npcs[recipient].hugged === true){
				return (npcs[recipient].lines.hug)
			}
			else {
				npcs[recipient].hugged = true;
				score++;
				return (npcs[recipient].lines.hug + "You feel accomplished, like you are closer to winning this silly game. ")
			}
		}
		else {
			return ("You can't hug " + recipient + ". ")
		}
	}
	else {
		return ("There is no one to hug. ");
	}
}

function Take (object) {
	return ("taking " + object)
}

function Kill (victim) {
	return ("killing " + victim)
}

function Look (object) {
	if(object === "") {
		var what_to_return = "You are at " + current_location.name + ". " + current_location.description;
		var dirs = ["north", "south", "east", "west"];
		for (var i = 0; i < dirs.length; i++ ){
			if (current_location.directions[dirs[i]] != "nope") {
				what_to_return = what_to_return + "To the " + dirs[i] + " is " + locations[current_location.directions[dirs[i]]].name + ". ";
			}
		}
		return (what_to_return);
	}
	else {
		return ("looking at " + object);
	}
}

function check_for_verbs(response) {
	if (response.substring(0,2) == "go") {
    	return Walk(response.substr(3));
	}
	else if (response.substring(0,4) == "walk") {
    	return Walk(response.substr(5));
	}
	else if (response.substring(0,3) == "hug") {
		return Hug(response.substr(4));
	}
	else if (response.substring(0,7) == "embrace") {
		return Hug(response.substr(8));
	}
	else if (response.substring(0,4) == "take") {
		return Take(response.substr(5));
	}
	else if (response.substring(0,3) == "get") {
		return Take(response.substr(4));
	}
	else if (response.substring(0,7) == "pick up") {
		return Take(response.substr(8));
	}
	else if (response.substring(0,4) == "kill") {
		return Kill(response.substr(5));
	}
	else if (response.substring(0,6) == "murder") {
		return Kill(response.substr(7));
	}
	else if (response.substring(0,7) == "look at") {
		return Look(response.substr(8));
	}
	else if (response.substring(0,4) == "look") {
		return Look(response.substr(5));
	}
	else {
		return false;
	}
}


function turn(response) {
    $("#history").append('<div class="human-response"> >' + response + '</div>') //reprint response
    $('#response').val(""); //clear response box
    turn_count ++;
    var verb_response = check_for_verbs(response);
    if(verb_response === false){
	    computer_print("I don't know what '" + response + "' means. I hope it isn't anything rude.")
    }
    else {
    	computer_print(verb_response);
    }
    score_update(score);
    turn_update(turn_count);
    var hug_count = 0;
    var people_count = 0;
	for(var key in npcs) {
		people_count++;
		if (npcs[key].hugged === true) {
			hug_count++;
		}
	}
	if (hug_count === people_count) {
		computer_print("You are a winner");
	}
}

//score


$("#response").keyup(function(event){
    if(event.keyCode == 13){
    	turn($('#response').val())
    }
});