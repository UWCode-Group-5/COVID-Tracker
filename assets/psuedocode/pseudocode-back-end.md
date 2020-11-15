##PSUEDOCODE for Backend

#Phase 1: API setup and skeleton html


<!-- API 1 -->
    ONCLICK for Current US
        <!-- By State -->
        https://api.covidtracking.com/v1/states/current.json

       <!-- Dataset -->
        "date": 20201111,
        "state": "WA",
        "death": 2482,
        "hospitalized": 9092,
        "positive": 120011,
        "probableCases": null,
        "negative": 2524414,
        "positiveIncrease": 1441,
        "negativeIncrease": 15469,
        "dataQualityGrade": "B",



        <!-- Whole Nation -->
        https://api.covidtracking.com/v1/us/current.json

        "date": 20201111,
        "state": "WA",
        "death": 2482,
        "hospitalized": 9092,
        "positive": 120011,
        "probableCases": null,
        "negative": 2524414,
        "positiveIncrease": 1441,
        "negativeIncrease": 15469,
        "dataQualityGrade": "B",


    ONCLICK for Historic US

```js
    var searchCovid = function(userInput) {
      var queryURL = "https://api.covidtracking.com/v1/" + states +"/daily.json";
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
      });
    };
    ```
    

<!-- https://api.covidtracking.com -->

<!-- API 2 -->
ONCLICK for Worldwide
<!-- https://opendata.ecdc.europa.eu/covid19/casedistribution/json -->
    <!-- https://covid19.who.int/ -->

ONCLICK for Country


#Phase 2: Connect API's to html

#Phase 3: Modify datasets and add more functionality