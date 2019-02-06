module.exports = helloWorld

const randomNumber = require('random-number-in-range')

function helloWorld () {
	return 'Hello World-' + randomNumber(10, 99)
}