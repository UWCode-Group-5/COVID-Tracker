// Setting up moment.js
var today = moment();

// Setup values
var stateSubmit = $("#state-submit");
var clearSubmit = $("#clear-submit");
var userSearch = $("#user-search");
var citiesArray = [];
var datesArray = [];
var newDate = $("#datepicker").datepicker({ dateFormat: 'yymmdd' });

// Setting up States Object

var statesObj = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
}

var statesObjOpp = {
  'alabama': 'AL',
  'alaska': 'AK',
  'american Samoa': 'AS',
  'arizona': 'AZ',
  'arkansas': 'AR',
  'california': 'CA',
  'colorado': 'CO',
  'connecticut': 'CT',
  'delaware': 'DE',
  'district Of Columbia': 'DC',
  'federated States Of Micronesia': 'FM',
  'florida': 'FL',
  'georgia': 'GA',
  'guam': 'GU',
  'hawaii': 'HI',
  'idaho': 'ID',
  'illinois': 'IL',
  'indiana': 'IN',
  'iowa': 'IA',
  'kansas': 'KS',
  'kentucky': 'KY',
  'louisiana': 'LA',
  'maine': 'ME',
  'marshall Islands': 'MH',
  'maryland': 'MD',
  'massachusetts': 'MA',
  'michigan': 'MI',
  'minnesota': 'MN',
  'mississippi': 'MS',
  'missouri': 'MO',
  'montana': 'MT',
  'nebraska': 'NE',
  'nevada': 'NV',
  'new hampshire': 'NH',
  'new jersey': 'NJ',
  'new mexico': 'NM',
  'new york': 'NY',
  'north carolina': 'NC',
  'north dakota': 'ND',
  'northern mariana islands': 'MP',
  'ohio': 'OH',
  'oklahoma': 'OK',
  'oregon': 'OR',
  'palau': 'PW',
  'pennsylvania': 'PA',
  'puerto Rico': 'PR',
  'rhode Island': 'RI',
  'south carolina': 'SC',
  'south dakota': 'SD',
  'tennessee': 'TN',
  'texas': 'TX',
  'utah': 'UT',
  'vermont': 'VT',
  'virgin Islands': 'VI',
  'virginia': 'VA',
  'washington': 'WA',
  'west Virginia': 'WV',
  'wisconsin': 'WI',
  'wyoming': 'WY'
}

// Convert Abreviated States into Full States Function
function stateAbbr (state, statesObj){
  stateUpper = state.toUpperCase().trim();
   getAbbr = statesObj[stateUpper];
   return getAbbr;
}

// Convert input into abbreviated states
function stateFullName (statesObjOpp){
  var state = $("#user-search").val();
  stateFull = state.toLowerCase().trim();
   getAbbr = statesObjOpp[stateFull];
   return getAbbr;
}


// Setting up Current Chart.js
function chartCurrent(response) {
  var canvasOne = $("<canvas id='myChartOne'></canvas>");
  var chartContainer1 = $(".chartContainer1");
  chartContainer1.empty();
  chartContainer1.append(canvasOne);

  var myChartOne = $("#myChartOne")[0].getContext("2d");
  var currentChart;
  currentChart = new Chart(myChartOne, {
    type: "bar",
    data: {
      labels: ["death", "hospitalized", "positiveIncrease", "negativeIncrease"],
      datasets: [{
        label: "Current Covid Statistics",
        data: [
          response.death,
          response.hospitalized,
          response.positiveIncrease,
          response.negativeIncrease,
        ],
        backgroundColor: [
          "#7f0000",
          "#ce93d8",
          "#ef9a9a",
          "#a5d6a7",
          "#ef5350",
          "#66bb6a"
        ]
      }]
    },

    options: {}
  });
}

// Setting up Historic Chart.js
function chartHistoric(responseTwo) {
  var canvasTwo = $("<canvas id='myChartTwo'></canvas>");
  var chartContainer2 = $(".chartContainer2");
  chartContainer2.empty();
  chartContainer2.append(canvasTwo);
  var myChartTwo = $("#myChartTwo")[0].getContext("2d");
  var historicChart;
  historicChart = new Chart(myChartTwo, {
    type: "bar",
    data: {
      labels: ["death", "hospitalized", "positiveIncrease", "negativeIncrease"],
      datasets: [{
        label: "Historic Covid Statistics",
        data: [
          responseTwo.death,
          responseTwo.hospitalized,
          responseTwo.positiveIncrease,
          responseTwo.negativeIncrease,
        ],
        backgroundColor: [
          "#7f0000",
          "#ce93d8",
          "#ef9a9a",
          "#a5d6a7",
          "#ef5350",
          "#66bb6a"
        ]
      }]
    },
    options: {}
  });

}

// Current Data Container
var container = $("#container");
var date = $("<h3>");
var state = $("<h3>");
var death = $("<h3>");
var hospitalized = $("<h3>");
var positive = $("<h3>");
var negative = $("<h3>");
var positiveIncrease = $("<h3>");
var negativeIncrease = $("<h3>");
var dataQualityGrade = $("<h3>");

//Historic Data Container
var containerTwo = $("#container-two");
var dateTwo = $("<h3>");
var stateTwo = $("<h3>");
var deathTwo = $("<h3>");
var hospitalizedTwo = $("<h3>");
var positiveTwo = $("<h3>");
var negativeTwo = $("<h3>");
var positiveIncreaseTwo = $("<h3>");
var negativeIncreaseTwo = $("<h3>");
var dataQualityGradeTwo = $("<h3>");

// Append Current Items
function appendCurrent() {
  container.append(
    date,
    state,
    death,
    hospitalized,
    positive,
    negative,
    positiveIncrease,
    negativeIncrease,
    dataQualityGrade);
}

//Append Historic Items
function appendHistoric() {
  containerTwo.append(
    dateTwo,
    stateTwo,
    deathTwo,
    hospitalizedTwo,
    positiveTwo,
    negativeTwo,
    positiveIncreaseTwo,
    negativeIncreaseTwo,
    dataQualityGradeTwo);
}

// Empty Values
function removeItems() {
  localStorage.clear();

  if (localStorage.getItem("city") === null){
    hideContent();
    }
}



// Call API's
function handleAPI(states,dates) {
  
  var queryURL =
    "https://api.covidtracking.com/v1/states/" + states + "/current.json";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    // Ajax Call for Searched Current Values
    date.text("Date: " + (moment(`${response.date}`).format('MM/DD/YYYY')));
    stateAb = response.state;
    stateFull = stateAbbr(stateAb, statesObj);
    state.text("State: " + stateFull);
    death.text("Covid State Deaths: " + response.death);
    hospitalized.text("Covid Hospitalizations: " + response.hospitalized);
    positive.text("Covid Positive Cases: " + response.positive);
    negative.text("Covid Negative Cases: " + response.negative);
    positiveIncrease.text(
      "Covid Positive Case Increase: " + response.positiveIncrease
    );
    negativeIncrease.text(
      "Covid Negative Case Increase: " + response.negativeIncrease
    );
    dataQualityGrade.text(
      "Data Quality Grade: " + response.dataQualityGrade
    );
    appendCurrent(response);
    chartCurrent(response);

    //Ajax call for Searched Historic Values
    var queryURL =
      "https://api.covidtracking.com/v1/states/" +
      states +
      "/" +
      dates +
      ".json";
    if (dates == "") {
      return
    } else {
      $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (responseTwo) {
        dateTwo.text("Date: " + (moment(`${responseTwo.date}`).format('MM/DD/YYYY')));
        state2 = responseTwo.state;
        stateFull2 = stateAbbr(state2, statesObj)
        stateTwo.text("State: " + stateFull2);
        deathTwo.text("Covid State Deaths: " + responseTwo.death);
        hospitalizedTwo.text("Covid Hospitalizations: " + responseTwo.hospitalized);
        positiveTwo.text("Covid Positive Cases: " + responseTwo.positive);
        negativeTwo.text("Covid Negative Cases: " + responseTwo.negative);
        positiveIncreaseTwo.text(
          "Covid Positive Case Increase: " + responseTwo.positiveIncrease
        );
        negativeIncreaseTwo.text(
          "Covid Negative Case Increase: " + responseTwo.negativeIncrease
        );
        dataQualityGradeTwo.text(
          "Data Qualtiy Grade: " + responseTwo.dataQualityGrade
        );
        // Add searched city and date to Local Storage
        citiesArray.push(localStorage.setItem("city", JSON.stringify(states)));
        datesArray.push(localStorage.setItem("date", JSON.stringify(dates)));
        appendHistoric();
        chartHistoric(responseTwo);
      });
    }
  });
}

//News Handler Variables

var newsContainerEl = $("#newsContainer");
var title = $("<h2>");
var link = $("<a>");

// // News Handler
function newsHandler() {
  var queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=coronavirus&api-key=nWRIeVDQlH0DflGm5L1S9D7a8GPZU7WJ";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {

    var resTitle = response.response.docs[0].headline.main;
    var title0 = response.response.docs[0].headline.main;
    var link0 = response.response.docs[0].web_url;
    var articleArray = response.response;

    for (var i = 0; i < 5; i++) {

      var article;
      var unOrderList = $("#newsArticles");
      var link;
      var linki = response.response.docs[i].web_url;
      article = $('<li class="is-size-5" style= "list-style:none;"> ');
      link = $("<a>");
      link.text(response.response.docs[i].headline.main);
      link.attr("href", linki)
      article.append(link);
      unOrderList.append(article);
    }

    var articleArray = response.response;
    var article;
    var unOrderList = $('.marque-content-items');
        for (var i=0; i<5;i++){
          article = $('<li>');
          article.text(response.response.docs[i].headline.main);
          unOrderList.append(article);
        }

  });
}

// Append Current Items
function appendNews() {
  newsContainerEl.append(
    title,

    link
  );
}

// Appending and Calling NewsAPI
appendNews();
newsHandler();

// Get Local Item and Initialize last City and Date Search
function getArrays(){
  // showContent();
  var states = JSON.parse(localStorage.getItem("city"));
  var dates = JSON.parse(localStorage.getItem("date"));
  handleAPI(states,dates);
}

getArrays();

// Calling and Rendering Current and Historic API
stateSubmit.on("click", function (event) {
  event.preventDefault();
  var states = stateFullName(statesObjOpp);
var dates = $("#datepicker").datepicker({ dateFormat: 'yymmdd' }).val();
showContent();
  handleAPI(states,dates);
});


// Clear Current and Historic API
clearSubmit.on("click", function (event) {
  event.preventDefault();
  removeItems();
  
});


// Showing content
function showContent (){
  var newsContent = $("#newsArticles").css("display", "block");
  var dataContent = $("#dataContent").css("display", "block");
  var faqContent = $("#faqcontainer").css("display", "block");
}

// Hiding Content
function hideContent (){
  var newsContent = $("#newsArticles").css("display", "none");
  var dataContent = $("#dataContent").css("display", "none");
  var faqContent = $("#faqcontainer").css("display", "none");
}

// Calling Hidden Content
if (localStorage.getItem("city") === null){
  hideContent();
  }
