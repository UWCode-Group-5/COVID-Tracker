// Setup Covid Tracker API
var stateSubmit = $("#state-submit");

        // Empty values
        var container = $("#container");
        var date = $("<h3>").text("");
        var state = $("<h3>").text("");
        var death = $("<h3>").text("");
        var hospitalized = $("<h3>").text("");
        var positive = $("<h3>").text("");
        var negative = $("<h3>").text("");
        var positiveIncrease = $("<h3>").text("");
        var negativeIncrease = $("<h3>").text("");
        var dataQualityGrade = $("<h3>").text("");

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


        // Searched Values
        date = $("<h3>").text("Date: " + response.date);
        state = $("<h3>").text("State: " + response.state);
        death = $("<h3>").text("Death: " + response.death);
        hospitalized = $("<h3>").text("Hospitalized: " + response.hospitalized);
        positive = $("<h3>").text("Positive: " + response.positive);
        negative = $("<h3>").text("Negative: " + response.negative);
        positiveIncrease = $("<h3>").text("Positive Increse: " + response.positiveIncrease);
        negativeIncrease = $("<h3>").text("Negative Increase: " + response.negativeIncrease);
        dataQualityGrade = $("<h3>").text("Data Qualtiy Grade: " + response.dataQualityGrade);
        container.append(date,state,death,hospitalized,positive,negative,positiveIncrease,negativeIncrease,dataQualityGrade);
        //Ajax call for historic values
        var dates = $("#user-date").val();
        var queryURL = "https://api.covidtracking.com/v1/states/" + states +"/"+ dates +".json";
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
        date = $("<h3>").text("Date: " + response.date);
        state = $("<h3>").text("State: " + response.state);
        death = $("<h3>").text("Death: " + response.death);
        hospitalized = $("<h3>").text("Hospitalized: " + response.hospitalized);
        positive = $("<h3>").text("Positive: " + response.positive);
        negative = $("<h3>").text("Negative: " + response.negative);
        positiveIncrease = $("<h3>").text("Positive Increse: " + response.positiveIncrease);
        negativeIncrease = $("<h3>").text("Negative Increase: " + response.negativeIncrease);
        dataQualityGrade = $("<h3>").text("Data Qualtiy Grade: " + response.dataQualityGrade);
        container.append(date,state,death,hospitalized,positive,negative,positiveIncrease,negativeIncrease,dataQualityGrade);
        });
    
    });
});