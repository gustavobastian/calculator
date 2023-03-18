const scripts = require('./scripts');


describe('Start', function() {
    test('Test scripts file', function() {
      expect(scripts.hello()).toEqual('hello from Script.js');
    });
  });
  describe('add', () => {
	test('adds 0 and 0', () => {
		expect(scripts.add(0,0)).toBe(0);
	});

	test('adds 2 and 2', () => {
		expect(scripts.add(2,2)).toBe(4);
	});

	test('adds positive numbers', () => {
		expect(scripts.add(2,6)).toBe(8);
	});
});

describe('subtract', () => {
	test('subtracts numbers', () => {
		expect(scripts.subtract(10,4)).toBe(6);
	});
});


describe('multiply', () => {
	test('multiplies two numbers', () => {
		expect(scripts.multiply(2,4)).toBe(8);
	});
	
});

describe('divide', () => {
	test('divide two numbers', () => {
		expect(scripts.divide(4,2)).toBe(2);
	});

	test('divide by 0', () => {
		expect(scripts.divide(2,0)).toBe("ERROR");
	});
});

describe('operate', () => {
	test('divide two numbers', () => {
		expect(scripts.operate('/',4,2)).toBe(2);
	});

	test('divide by 0', () => {
		expect(scripts.operate('/',2,0)).toBe("ERROR");
	});
	test('sum 2 numbers', () => {
		expect(scripts.operate('+',2,1)).toBe(3);
	});
	test('multiply 2 numbers', () => {
		expect(scripts.operate('*',7,2)).toBe(14);
	});

	test('fail operate command', () => {
		expect(scripts.operate('//',2,0)).toBe("ERROR");
	});

});
