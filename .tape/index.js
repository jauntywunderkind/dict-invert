#!/usr/bin/env node
import tape from "tape"
import DictInvert from "../dict-invert.js"

tape( "dict-invert", function( t){
	const
		dict= {
			a: "apple",
			b: "banana"
		},
		inverted= DictInvert( dict)
	t.equal( inverted.apple, "a")
	t.equal( inverted.banana, "b")
	t.end()
})

tape( "dict-invert on self", function( t){
	const dict= {
		a: "apple",
		b: "banana"
	}
	DictInvert.call( dict, dict)
	t.equal( dict.apple, "a")
	t.equal( dict.banana, "b")
	t.end()
})
