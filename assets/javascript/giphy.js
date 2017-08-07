
function displayGif() {
    var gif = $(this).attr("data-name");
    var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryUrl,
        mehtod: "GET"
    }).done(function(response) {
        
        var gifDiv = $("<div class='gif'>");

        var rating = response.Rated;

        var pOne =$("<p>").text("Rating: " + rating);

        gifDiv.append(pOne);

        $("#gif-view").prepend(gifDiv);

    });

    function renderButton() {
        $("#buttons-view").empty();

        var a = $("<button>");

        a.addClass("gif");
        
        a.attr("data-name", gif);

        $("#buttons-view").append(a);
    }

    
}

