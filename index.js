﻿var jokes = require('./jokes.json');
var rajnikanthjokes = {
    getRajniJoke: function () {
        return jokes[Math.floor(Math.random() * jokes.length)];
    }
};

module.exports = rajnikanthjokes;