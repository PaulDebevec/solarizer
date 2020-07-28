# Solarizer [![Build Status](https://travis-ci.org/PaulDebevec/solarizer.svg?branch=master)](https://travis-ci.org/PaulDebevec/solarizer)

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
 1. Visit the production or localhost application and enter your address and click Begin  
 ![Home page](https://i.imgur.com/nVWbPtD.png)
 2. Enter a hypothetical solar array configuration. Commonly-encountered settings are suggested through the use of placeholder text in each input field, and then click Submit  
 ![Configure page](https://i.imgur.com/J14h8zM.png)
 3. (Optional) Enter historical energy usage for the past twelve months (tip: check your utility bill history). If this information is not available, click Skip, otherwise click Submit.  
 ![Historical page](https://i.imgur.com/Dkyl1Tp.png)
 4. Results are displayed in a table.  
 ![Results page](https://i.imgur.com/V243QrD.png)
 5. Click on "Graph It" to view the same data in charts.  
 ![Charts page](https://i.imgur.com/yJIusmW.png)
 6. The FAQ is available from the home page by clicking "What is Solarizer?"
 ![FAQ](https://i.imgur.com/ayKYh9D.png)

## Backend
Solarizer's frontend is supported by two API endpoints: a Python/Flask API combining power generation and utility rate data, and a Rails API serving ecotips and frequently asked questions. The first is hosted at [solarize-be](https://github.com/PaulDebevec/solarize-be), and the second at [solarizer-api](https://github.com/jrsewell400/solarizer-api)

## Contributors
* [Jeremy Poulter](https://github.com/J-Poulter) (frontend)
* [Nick Taylor](https://github.com/nickstaylor) (frontend)
* [Alex Latham](https://github.com/alex-latham) (frontend)
* [Paul Debevec](https://github.com/PaulDebevec) (backend)
* [Jordan Sewell](https://github.com/jrsewell400) (backend)

## Acknowledgements
This project was made possible by the research, collection, and publication of geographic solar radiance data by the National Renewable Energy Laboratory ([NREL](https://www.nrel.gov/)), a national laboratory of the U.S. Department of Energy's Office of Energy Efficiency and Renewable Energy.
