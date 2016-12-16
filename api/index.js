const fs     = require('fs');
const axios  = require('axios');
const config = fs.existsSync('../config/index.js') ? require('../config') : {};

const api = axios.create({
    baseURL: process.env.OPEN_311_URL || config.OPEN_311_URL
});


module.exports = {
    getRequests: function() {
        return api.get('/open311/v2/requests.json');
    }
};