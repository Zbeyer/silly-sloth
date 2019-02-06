const test = require('tap').test
const helloWorld = require('../index')
const randomNumber = require('random-number-in-range')

test('smoke test', function (t) {
	const string = helloWorld()
	t.is(typeof string, 'string')
	t.ok(string.length > 0, 'string')
	//last character should be a number
	t.ok(/-\d{2}$/.test(string))
	t.end()
})