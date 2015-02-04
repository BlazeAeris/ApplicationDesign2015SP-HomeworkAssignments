(function(exports) {
	'use strict';

	var countVal = 1;

	var validators = {
		incrementer: function() {
			console.log('calling count');
			return countVal++;	
		},
		isString: function(val) {
			return typeof val === 'string' ? true : false;
		},
		required: function(val) {
			return (val !== null && val !== undefined) ? true : false;
		},
		makeLength: function(length) {

		}
	};

	


	
	// do not touch
	exports.validators = validators;

})(this);