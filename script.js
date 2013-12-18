
//score game based on number of hugs
//let people steal a bike but take a point off. and don't give the point back if they give the bike back: "That won't ASSUAGE your CONSCIENCE."

//location



//object


//npc
var score = 0;
var turn_count = 0;

function computer_print(response) {
	$("#history").append('<div class="computer-response">' + response + '</div>')
}

//turn

function turn(response) {
    $("#history").append('<div class="human-response"> >' + response + '</div>') //reprint response
    $('#response').val(""); //clear response box
    turn_count ++;
    if(response === "LEFT") {
	    computer_print("You are a butt");
	    score ++;
    }
    else {
	    computer_print("I don't know what '" + response + "' means. I hope it isn't anything rude.")
    }
    computer_print("Your score is " + score + ".");
    computer_print("This is turn " + turn_count + ".")
}

//score


$("#response").keyup(function(event){
    if(event.keyCode == 13){
    	turn($('#response').val())
    }
});