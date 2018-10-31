### Thermostat Project Javascript

This is a Javascript front end web app that models the behaviour of a simple thermostat. A user can increase or decrease the temperature, switch power saving mode on and off, and using a simple weather API can select the city and see the outdoor temperature in that city.

## Technology used

- Javascript
- jquery
- Jasmine

## To run the app

```
git clone https://github.com/Lucx14/Thermostat.git
cd Thermostat
open -a "Google Chrome" index.html
open -a "Google Chrome" SpecRunner.html

```

### User Stories

```
As a user
So that I can make it warmer
I want to be able to increase the temperature

As a user
So that I can make it colder
I want to be able to decrease the temperature.

As a user
So that I can clearly see the current temperature
I would like the temperature to be clearly displayed

As a user
So that I dont make it too cold
I want my thermostat to have a minimum temperature of 10 degrees

As a user
So that I can save money on my bills
I want my thermostat to have a power saving mode

As a user 
So that I can see the outside temperature in other cities
I want to be able to select a city and check its temperature

```


## Process

This was my first project built using javascript in the space of a few days, it was set as a task in week 5 of Makers Academy. The criteria was quite simple, to build a front end app that models the behaviour of a thermostat, so it can increase or decrease temperature, turn a power saving mode on and off, display a temperature and has the ability to reset the temperature to a default. The first thing I did was to introduce a testing framework. I used Jasmine for this and wrote tests first and let them be the guide to what functions I was building. 

I used the ES5 constructor, prototype syntax to build the main object starting with the up and down and get curtrent temp functions. Then I added the power saving mode toggle function and the reset temp function, and as I did these i was adding constructor variables to the object, setting defaults and adding max and min temps.

Next I added the visual interface with some basic html and a very simple css file. And finally added an interface js file and used jquery to complete the user interface setting up the functions to activate in response to user mouseclicks on buttons.

Lastly I incorporated a simple weather API that could display a temperature in another city depending on a user choice.

