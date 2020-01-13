const authKey = "";
// Place your API key in the line above between the quotes
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ userSearchTerm +"&api-key=" + authKey;
var userSearchTerm = "";
var totalResults = 0;
var startYear = 0;
var endYear = 0;
var articleCounter = 0;

function runSearch(queryURL, totalResults){
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        Console.log(response);
        for(i = 0; i < totalResults; i ++){
            totalResults ++;
            var articleDiv = $("<div>").attr('id', 'article-' + articleCounter + '-container');
            $("#results").append(articleDiv);
        }
    })
}
$(document).ready(function(){
    $("#search-box").focus();
    $("#search-btn").on("click", function(){
        runSearch(queryURL, totalResults);
    })
});