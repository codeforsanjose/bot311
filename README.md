Bot 311
=======

An extensible Open311 chatbot to report issues in your community.

Built with the [Microsoft Bot Framework](https://dev.botframework.com/) and compatible with any [Open311](http://www.open311.org/) implementation.

## Install

Node.js
https://nodejs.org/en/

Microsoft Bot Framework
https://dev.botframework.com/


## Getting Started

* Clone repository and navigate to repository directory
* In `config` folder, create a file `index.js` with following content:
```
module.exports = {
    "GOOGLE_MAPS_API_KEY": "[YOUR API KEY]",
    "GOOGLE_STREET_VIEW_API_KEY": "[YOUR API KEY]",
    "OPEN_311_URL": "[OPEN 311 URL]",
    "OPEN_311_API_KEY": "[YOUR API KEY]",
    "MICROSOFT_BOT_APP_ID": "[YOUR BOT APP ID]",
    "MICROSOFT_BOT_APP_PASSWORD": "[YOUR BOT APP PASSWORD]"
};
```
* Run `npm install` to install project depencies.
* Run `node app.js` to start the bot on localhost
* Open Bot Framework Emulator and test chatting with bot!
