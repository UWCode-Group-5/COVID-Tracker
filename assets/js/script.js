// Setup Covid Tracker API
var stateSubmit = $("#state-submit");


stateSubmit.on("click", function(event){
    event.preventDefault();
    var states = $("#user-search").val();
    console.log(states);
    var queryURL = "https://api.covidtracking.com/v1/states/" + states +"/current.json";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response);
        var container = $("#container");
        var date = $("<h3>").text("Date: " + response.date);
        var state = $("<h3>").text("State: " + response.state);
        var death = $("<h3>").text("Death: " + response.death);
        var hospitalized = $("<h3>").text("Hospitalized: " + response.hospitalized);
        var positive = $("<h3>").text("Positive: " + response.positive);
        var negative = $("<h3>").text("Negative: " + response.negative);
        var positiveIncrease = $("<h3>").text("Positive Increse: " + response.positiveIncrease);
        var negativeIncrease = $("<h3>").text("Negative Increase: " + response.negativeIncrease);
        var dataQualityGrade = $("<h3>").text("Data Qualtiy Grade: " + response.dataQualityGrade);

        container.append(date,state,death,hospitalized,positive,negative,positiveIncrease,negativeIncrease,dataQualityGrade);
    });
});