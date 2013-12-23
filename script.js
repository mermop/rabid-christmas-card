var score = 0;
var turn_count = 0;
var inventory = ["christmas_card"]
var current_location = locations.outside;
var win_status = "no";
var people_count = 0;
var rampage = false;
var kill_count = 0;
var innocent_victims = [];
var destroyed_items = [];

function computer_print(response) {
	$("#history").append('<div class="computer-response">' + response + '</div>');
}

function score_update(score) {
	$("#score").text("Score: " + score);
}

function turn_update(turn) {
	$("#turn").text("Turn: " + turn);
}

function game_end(reason) {
  computer_print(endings[reason].final_message);
  computer_print("<a href='https://twitter.com/share' data-text='" + endings[reason].tweet + "' class='twitter-share-button'> Tweet </a>")
  $('#response').remove();
  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
}

function check_for_win(turn) {
  var hug_count = 0;
  var people_count = 0;
  for(var key in npcs) {
      if ( npcs[key].hugged === true ) {
        hug_count ++;
      }
      people_count ++;
  }
  if (hug_count === people_count) {
    game_end("hugged");
  }
  var kill_count = 0;
  people_count = 0;
  for(var key in npcs) {
      if ( npcs[key].dead === true ) {
        kill_count ++;
      }
      people_count ++;
  }
  if (kill_count === people_count) {
    game_end("murdered");
  }
}

function Object_Namer(object) {
  return objects[object].name
}

function turn_to_regex (phrase) {
  return "^" + phrase + ""
}

function check_for_verbs(response) {
    var response = response.toLowerCase();
    for(var key in verbs) {
        for(i = 0; i < verbs[key].aliases.length; i++ ) {
            if(response.match(turn_to_regex(verbs[key].aliases[i]))) {
                var cut_point = verbs[key].aliases[i].length + 1;
                return verbs[key].funct(response.substr(cut_point));;
            }
        }
    }
    return false;
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
    	if (rampage === false) {
	    	computer_print("I don't know what '" + response + "' means. I hope it isn't anything rude.");
    	}
    	else {
    		computer_print("I'm glad I don't know what '" + response + "' means. I don't want to know. I don't need the insight into your twisted mind.")
    	}
    }
    else {
      computer_print(verb_response);
    }
    score_update(score);
    turn_update(turn_count);
    check_for_win(turn);

    if(rampage === true){
    	$('body').css('color', '#FF0000')
    }
};

$("#response").keyup(function(event){
  if(event.keyCode == 13){
    turn($('#response').val());
  }
});
