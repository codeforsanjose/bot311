"use strict";
const fs      = require('fs');
const url     = require('url');
const qs      = require('querystring');
const _       = require('lodash');
const builder = require('botbuilder');

const config  = fs.existsSync('../config/index.js') ? require('../config') : {};
const api     = require('../api');

function getImage(request) {
    request = request || {};
    return request.media_url || url.format({
        protocol : 'https',
        host     : 'maps.googleapis.com',
        pathname : '/maps/api/streetview',
        search   : qs.stringify({
            location : `${request.lat},${request.long}`,
            size     : '600x300',
            key      : process.env.GOOGLE_STREET_VIEW_API_KEY || config.GOOGLE_STREET_VIEW_API_KEY
        })
    });
}

module.exports = [
    function (session) {
        api.getRequests()
            .then((results) => {
                console.log(results);
                const requests = _.chain(results).get('data').take(10).value();
                const cards = requests.map((request) => {
                    return new builder.HeroCard(session)
                        .title(request.service_name)
                        .text(request.description)
                        .images([
                            builder.CardImage.create(session, getImage(request))
                        ]);
                });

                const message = new builder.Message(session)
                    .attachmentLayout(builder.AttachmentLayout.carousel)
                    .attachments(cards);

                session.send(message);
                session.endDialog();
            })
            .catch((err) => {
                session.endDialog();
            });
    }
];