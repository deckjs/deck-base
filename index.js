var fs = require('fs')
var path = require('path')

module.exports = require('./package-template.json')
module.exports.deck = fs.readFileSync(path.join(__dirname, 'deck.md'))
module.exports.dir = file => path.join(__dirname, file)
