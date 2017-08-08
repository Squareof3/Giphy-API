var animes = ["Korra", "Cowboy Bebop", "Trigun"];

function displayGif() {
    var anime = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?api_key=c4cf90bfcb2e42ea95eaf8d7767bf2be&q=" +anime + "&limit=10&offset=0&rating=PG-13&lang=en";
        
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        
        var animeDiv = $("<div class='anime'>");

        var rating = response.rating;

        var pOne = $("<p>").text("Rating: " + rating);

        animeDiv.append(pOne);

        var gifURL = response.q;

        var gif = $("<img>").attr("src", gifURL);

        animeDiv.append(gif);

        $("#animes-view").prepend(animeDiv);

    
    });
}

function renderButtons() {

    $("#buttons-view").empty();

    for (var i = 0; i < animes.length; i++) {

        var a = $("<button>");

        a.addClass("anime");

        a.attr("data-name", animes[i]);

        a.text(animes[i]);

        $("#buttons-view").append(a);
    }
}

$("#add-anmie").on("click", function(event) {
    event.preventDefualt();

    var anime = $("#anime-input").val().trim();

    anime.push(anime);

    renderButtons();
});

$(document).on("click", ".anime", displayGif);

renderButtons();