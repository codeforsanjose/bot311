const builder = require('botbuilder');

module.exports = [
    function (session) {
        const card = new builder.HeroCard(session)
            .title('Graffiti')
            .subtitle('Intersection of Fillmore St & Geary Blvd')
            .text('1750 Geary at Fillmore, southeast side up from corner. Graffiti on sidewalk. Offensive. Thanks.')
            .images([
                builder.CardImage.create(session, "http://mobile311-dev.sfgov.org/media/san_francisco/report/photos/58477e41ff035c2789f7ef7d/photo_20161206_191240.jpg")
            ]);

        const message = new builder.Message(session)
            .attachmentLayout(builder.AttachmentLayout.carousel)
            .attachments([card, card, card]);

        session.send(message);
    }
];