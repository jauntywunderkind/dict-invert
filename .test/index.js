#!/usr/bin/env node
import tape from "tape"
import DictInvert from "../dict-invert.js"

function fruits(){
	return {
		a: "apple",
		b: "banana"
	}
}

tape( "dict-invert", function( t){
	const out= DictInvert( fruits())
	t.equal( out.apple, "a", "apple=a")
	t.equal( out.banana, "b", "banana=b")
	t.end()
})

tape( "dict-invert in-place", function( t){
	const
		dict= fruits(),
		out= DictInvert.call( dict)
	t.equal( out, dict, "got same dict back")
	t.equal( out.apple, "a", "apple=a")
	t.equal( out.banana, "b", "banana=b")
	t.end()
})
