# Solarizer

## About
Solarizer is a frontend web application created using a Node.js runtime environment with React and Redux libraries and developed by a team of Turing Module-4 students. Deployment to production at [solarizer.herokuapp.com](http://solarizer.herokuapp.com/) is handled using a continuous integration workflow with Travis-CI.

This application allows for users to configure a hypothetical solar power generation system through a series of forms to predict monthly energy output and utility savings. After configuration, the user is provided data in a table and can choose to view the same datapoints as several types of charts. We hope that having access to this information in a friendly user interface will encourage wider adoption of green energy sources.

## Prerequisites
* Node.js 12.18.1

## Setup Local Server
1. Clone this repository: `git clone git@github.com:PaulDebevec/solarizer.git`
2. Enter the local directory: `cd solarizer`
3. Install package dependencies: `npm install`
4. Run test suite: `npm test` then `a` to run all tests
4. Launch server: `npm start`
5. Visit [localhost:3000](localhost:3000) to view the application in your browser

## Walkthrough
 1. Visit the production or localhost application and enter your address
 2. Click Begin
 3. Enter a hypothetical solar array configuration. Commonly-encountered settings are suggested through the use of placeholder text in each input field.
 4. Click Submit
 5. (Optional) Enter historical energy usage for the past twelve months (tip: check your utility bill history). If this information is not available, click Skip, otherwise click Submit.
 5. Results are displayed in a table. Click on "Graph It" to view the same data in charts.

## Backend
Solarizer's frontend is supported by a RESTFUL Python/Flask API hosted in a separate repository at [solarize-be](https://github.com/PaulDebevec/solarize-be).

## Contributors
* [Jeremy Poulter (frontend)](https://github.com/J-Poulter)
* [Nick Taylor (frontend)](https://github.com/nickstaylor)
* [Alex Latham (frontend)](https://github.com/alex-latham)
* [Paul Debevec (backend)](https://github.com/PaulDebevec)
* [Jordan Sewell (backend)](https://github.com/jrsewell400)

## Acknowledgements
This project was made possible by the research, collection, and publication of geographic solar radiance data by the National Renewable Energy Laboratory ([NREL](https://www.nrel.gov/)), a national laboratory of the U.S. Department of Energy's Office of Energy Efficiency and Renewable Energy.
