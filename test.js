'use strict'

const tape = require('tape')
const image = require('./index')

tape('world-heritage-image', (t) => {
	t.plan(2)
	image(3).then((src) => {
		t.ok(src === 'Aachener_Dom.jpg', 'aachen cathedral')
	})
	image(208).then((src) => {
		t.ok(src === 'Afghanistan_Statua_di_Budda_1.jpg', 'buddhas of bamiyan')
	})
})
