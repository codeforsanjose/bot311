const restify = require('restify');
const builder = require('botbuilder');

//=========================================================
// Bot Setup
//=========================================================

// Setup Restify server
const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, () => {
    console.log('%s listening to %s', server.name, server.url);
});

// Create chat bot
const connector = new builder.ChatConnector({
    appId       : process.env.MICROSOFT_BOT_APP_ID,
    appPassword : process.env.MICROSOFT_BOT_APP_PASSWORD
});

const bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

//=========================================================
// Bots Dialogs
//=========================================================

bot.dialog('/', [
    function (session) {
        builder.Prompts.choice(session, "What would you like to do today?", [
            "Look at nearby issues",
            "Report an issue",
            "Track my issues"
        ]); 
    },
    function (session, results) {
        if (results.response) {
            session.send('not ok');
        } else {
            session.send("ok");
        }
    }
]);
