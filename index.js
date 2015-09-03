var fs = require('fs');
var path = require('path');

module.exports = require('./package.json');
module.exports.deck = fs.readFileSync(path.join(__dirname, 'deck.md'));