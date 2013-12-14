$("#response").keyup(function(event){
    if(event.keyCode == 13){
        var response = $('#response').val();
        $("#history").append('<div class="human-response"> >' + response + '</div>')
        $('#response').val("");
    }
});