export function DictInvert( dict){
	const
		self= (this!== globalThis&& this)|| {},
		props= {}
	for( let [ key, val] of Object.entries( dict)){
		// gets the key for this val
		function get(){
			return get.key
		}
		get.key= key
		get.val= val
		if( props[ val]){
			// clash
			// for now, last property wins
		}
		props[ val]= {
			get
		}
	}
	Object.defineProperties( self, props)
	return self
}
export {
	DictInvert as default,
	DictInvert as dictInvert
}
