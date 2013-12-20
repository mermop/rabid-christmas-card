
//score game based on number of hugs
//let people steal a bike but take a point off. and don't give the point back if they give the bike back: "That won't ASSUAGE your CONSCIENCE."

var score = 0;
var turn_count = 0;
var inventory = ["christmas_card"]
var current_location = locations.outside;
var win_status = "no";
var people_count = 0;

function computer_print(response) {
	$("#history").append('<div class="computer-response">' + response + '</div>');
}

function score_update(score) {
	$("#score").text("Score: " + score);
}

function turn_update(turn) {
	$("#turn").text("Turn: " + turn);
}

function check_for_win(turn) {
   for(var key in npcs) {
      if ( ! npcs[key].hugged === true) {
         return false
      }
   }

   win_game();
   return true
}

var Help = function (args) {
  return "Here are some helpful commands: look, go [DIRECTION], greet, inventory";
};

function Walk (dir) {
	var dir = dir.toLowerCase();
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
	var recipient = recipient.toLowerCase();
	if(current_location.npcs) {
		if(current_location.npcs.indexOf(recipient) > -1) {
			if(npcs[recipient].hugged === true){
				return (npcs[recipient].lines.hug);
			}
			else {
				npcs[recipient].hugged = true;
				score++;
				return (npcs[recipient].lines.hug + "You feel accomplished, like you are closer to winning this silly game. ");
			}
		}
		else {
			return ("You can't hug " + recipient + ". ");
		}
	}
	else {
		return ("There is no one to hug. ");
	}
}

function Take (object) {
	var object = object.toLowerCase();
	if(current_location.objects) {
		var index = current_location.objects.indexOf(object);
		if(index > -1) {
			inventory.push(current_location.objects.splice(index, 1)[0]);
			return ("You have picked up " + object + ". ")
		}
		else {
			return ("That is not here. You grab feebly at empty air.");
		}
	}
	else {
		return ("There is nothing here to take. ");
	}
}

function Kill (victim) {
  var kill_match_array = victim.split(" with ")
	var victim = kill_match_array[0].toLowerCase();
	if(current_location.npcs) {
		if(current_location.npcs.indexOf(victim) > -1) {
      var with_item = kill_match_array[1];
      if (with_item) {
  			win_status = "lose";
        return "You use " + with_item + " to brutally slay " + victim + ".";
      } else {
        win_status = "lose";
  			return ("You have a brief struggle with " + victim + " but they eventually succumb to your superior strength and military training. The rest of the office gapes horrified at your violent act. Someone from Loomio pulls out a gun and shoots you. You are dead and you lose the game.")
      }
		}
	}
	return ("killing " + victim);
}

function Look (object) {
	var object = object.toLowerCase();
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
		if(current_location.npcs) {
			if(current_location.npcs.indexOf(object) > -1) {
				return (npcs[object].lines.encounter);
			}
		}
		return ("looking at " + object);
	}
}

function Greet (person) {
	var person = person.toLowerCase();
	if(current_location.npcs) {
		if(current_location.npcs.indexOf(person) > -1) {
			return (npcs[person].lines.greet);
		}
		else {
			return (recipient + "can't hear you. You are shouting into the void and you look like an idiot.");
		}
	}
	else {
		return ("There is no one to greet here.");
	}
}

function Object_Namer(object) {
	return objects[object].name
}

function Inventory() {
	var inventory_string = "";
		for(i = 0; i < inventory.length; i ++) {
			inventory_string = inventory_string + Object_Namer(inventory[i]);
			if(i !== inventory.length - 1){
				inventory_string = inventory_string + " and ";
			}
		}
	return "You are carrying " + inventory_string + ". ";
}

function check_for_verbs(response) {
  if (response.match(/^help/i)) {
    return Help();
  }
  if (response.match(/^inventory/i)) {
    return Inventory();
  }
	else if (response.match(/^go/i)) {
    return Walk(response.substr(3));
	}
	else if (response.match(/^walk/i)) {
    return Walk(response.substr(5));
	}
	else if (response.match(/^hug/i)) {
		return Hug(response.substr(4));
	}
	else if (response.match(/^embrace/i)) {
		return Hug(response.substr(8));
	}
  else if (response.match(/^take/i)) {
    return Take(response.substr(5));
  }
  else if (response.match(/^steal/i)) {
    return Take(response.substr(6));
  }
	else if (response.match(/^get/i)) {
		return Take(response.substr(4));
	}
	else if (response.match(/^pick up/i)) {
		return Take(response.substr(8));
	}
	else if (response.match(/^kill/i)) {
		return Kill(response.substr(5));
	}
	else if (response.match(/^murder/i)) {
		return Kill(response.substr(7));
	}
	else if (response.match(/^look at/i)) {
		return Look(response.substr(8));
	}
	else if (response.match(/^look/i)) {
		return Look(response.substr(5));
	}
	else if (response.match(/^greet/i)) {
		return Greet(response.substr(6));
	}
	else if (response.match(/^talk to/i)) {
		return Greet(response.substr(8));
	}
	else {
		return false;
	}
}


function win_game() {
   win_status = "win";

   $('.container').html(images['success_christmas_tree']);
   $('.container').css('padding', "auto 0 auto 0;");
   $('.container').css('max-width', "1000px");
}


function turn(response) {

    $("#history").append('<div class="human-response"> > ' + response + '</div>'); //reprint response
    $('#response').val(""); //clear response box
    turn_count ++;
    var verb_response = check_for_verbs(response);
    if(verb_response === false){
      computer_print("I don't know what '" + response + "' means. I hope it isn't anything rude.");
    }
    else {
      computer_print(verb_response);
    }
    score_update(score);
    turn_update(turn_count);

    check_for_win(turn);

	if(win_status === "lose") {
		$('#response').remove();
	}
}

//score


$("#response").keyup(function(event){
  if(event.keyCode == 13){
    turn($('#response').val());
  }
});
