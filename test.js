'use strict'

const tape = require('tape')
const image = require('./index')

tape('world-heritage-image', (t) => {
	t.plan(2)
	image(3).then((src) => {
		t.ok(src === 'Aachener Dom.jpg', 'aachen cathedral')
	})
	image(208).then((src) => {console.log(src)
		t.ok(src === 'Afghanistan Statua di Budda 1.jpg', 'buddhas of bamiyan')
	})
})
