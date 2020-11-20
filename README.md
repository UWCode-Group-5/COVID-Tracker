# GLOBAL COVID TRACKER

UW Coding Bootcamp Project 1

## Table of Contents

- [GLOBAL COVID TRACKER](#global-covid-tracker)
  - [Table of Contents](#table-of-contents)
  - [Developer Comment](#developer-comment)
  - [Employer Request](#employer-request)
    - [User Story](#user-story)
    - [Acceptance Criteria](#acceptance-criteria)
  - [Mockup](#mockup)
  - [Website Features and Highlights](#website-features-and-highlights)
    - [HTML & CSS](#html--css)
    - [JAVASCRIPT](#javascript)
  - [Live Project Site](#live-project-site)
  - [Installation and Git Repository](#installation-and-git-repository)
  - [Contributors](#contributors)
    - [Group 5](#group-5)

## Developer Comment
Hello and welcome to the online repository of Group 5 of the UW Coding Bootcamp! We have created mobile-first website that allows the user to input a location code and retrieve COVID-19 related data in order to stay informed about travel plans. Historical data is accessible by inputting a date. The website also displays applicable news stories for more information. This set of features will allow travelers to make informed decisions about potential destinations.

### User Story

```
AS A traveler with concerns about COVID-19
I WANT to be able to see COVID-19 data based on location and date
SO THAT I can plan my travels to remain as safe as possible
```

### Acceptance Criteria

```
GIVEN I am navigating to a deployed website
WHEN I input a location
THEN I am presented with current data for that area
WHEN I input a date
THEN I am presented with historical data for the same location
WHEN I load the page
THEN pertinent news articles are available at the header
```

## Mockup

Application Wireframe
![Desktop website wireframe](./assets/images/Desktop-Wireframe.png)

## Website Features and Highlights

```
-Users are able to search for current Covid Data within any state in the U.S. 
-Users are also able to search historic data to compare to current Covid infections in the U.S. 
-This application features colorful graphs to easily read current/historical statistics. 
-The top of the application features a New York Times article section. This section updates daily 
with the five latest articles containing information related to the Corona Virus. 
-The State Covid Tracker is a responsive website and can be viewed easily on a small screen such as a cell phone or an IPad.
```

### HTML & CSS

```
- Created a responsive HTML shell for the code to run
- Created the necessary structure for the COVID API at "https://api.covidtracking.com"
- Used Bulma to create the layout and design of the Application
- Used Flex Box and Column widths to make responsive on all devices
```

### JAVASCRIPT

```
- Set up date and time variables with Moment JS
- Used my setup Data Attrubutes as Conditionals
- Added the feature to know whether you are past, present or future in your Daily Entry area.
- Stored all values when save button is pressed to Local Storage.
- User can see their notes even when they refresh.

```

## Live Project Site

https://uwcode-group-5.github.io/COVID-Tracker/

## Installation and Git Repository

Respository: https://github.com/UWCode-Group-5/COVID-Tracker/

Please follow the installation process below:

```
1. Fork the repository from the link above
2. Clone the repo to your computer via git
3. Open the project files with the text editor of your choice.
```
## Contributors
### Group 5
- Abdulhakeem Dahir
- Marco Bejarano Osegura
- Mia Dilberovic
- Mike Belliveau
- Valentina Decyatnik