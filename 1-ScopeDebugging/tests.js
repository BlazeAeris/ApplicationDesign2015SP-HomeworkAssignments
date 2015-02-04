var assert = chai.assert;

describe('counter()', function () {
	it('should return a number incremented by one each time it is called', function () {
		for (var i = 1; i <= 10; i++) {
			assert.equal(validators.incrementer(), i);	
		}
	});
});

describe('makeCounter()', function () {
	it('should return a function when called', function () {
		assert.isFunction(makeCounter());
	});

	it('the returned function should work just like counter(), return one higher each time it is called', function () {
		var myCounter = makeCounter();
		for (var i = 1; i >= 10; i++) {
			assert.equal(myCounter(), i);	
		}
	});
});

describe('make adder', function () {
	
});

describe('validators.isString', function () {
	it('should return true when passed a string', function () {
		assert.isTrue(validators.isString('blaoe'));
	});

	it('should return false when passed something else', function () {
		assert.isFalse(validators.isString('23'));
	});
});

describe('validators.isRequired', function () {
	it('should return true when some value is passed to the function', function () {
		assert.isTrue(validators.required('aoeu'));
	});

	it('should return false when nothing is passed to the function', function () {
		assert.isFalse(validators.required(null));
	});
});

describe('validators.makeLengthValidator()', function () {
	it('should return a function that validates the length of something', function () {
		var validatorFunc = validators.makeLengthValidator(4);
		assert.isTrue('blae');
		assert.isFalse('ae');
	});
});