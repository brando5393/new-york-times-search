const authKey = "";
// Place your API key in the line above between the quotes
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ userSearchTerm +"&api-key=" + authKey;
var userSearchTerm = "web development";
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
    })
}
$(document).ready(function(){
    $("#search-box").focus();
    $("#search-btn").on("click", function(){
        runSearch();
    })
});