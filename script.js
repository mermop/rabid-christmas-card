$("#response").keyup(function(event){
    if(event.keyCode == 13){
        var response = $('#response').val();
        $("#history").append('<div class="human-response"> >' + response + '</div>')
        $('#response').val("");
        $("#history").append('<div class="computer-response">' + "I don't know what '" + response + "' means. I hope it isn't anything rude." + '</div>')
    }
});

//score game based on number of hugs
//let people steal a bike but take a point off. and don't give the point back if they give the bike back: "That won't ASSUAGE your CONSCIENCE."