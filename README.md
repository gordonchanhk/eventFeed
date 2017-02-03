# Event Feed

A module to provide customer event feed.


##To start
1. modify `%endpoint%` in `/public/js/eventFeed.js to your node program endpoint, e.g. localhost:8000/eventFeed (as I defined the socket namespace as `eventFeed`, you can change that to other value in `lib/eventFeed_server.js`)
1. `$ npm install` to install all needed dependencies (fs / mime / socket.io)
1. `$ node server.js` to start the nodeJS server

## Run on Heroku
1. create a herok u app
1. setup environment variable `endPoint` to your herokuapp and suffix it with /eventFeed (read above for reason)
1. linkup the heroku app with your github repo (if you fork this repo to your own repo)
1. deploy the repo to Heroku and start run

## Example:
1. https://subtlebytes.herokuapp.com/
1. Open console for log

## Rough explanation
1. So far you should only see there is a text field / dropdown and a submit button. Try open your heroku app in multiple browser tabs with console panel open.
1. Try type something and select a dropdown option and click the button.
1. What you should see is: nothing show on the original browser, but console log appear in other browser tab : ]
