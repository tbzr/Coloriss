var assert = require('assert');
var Coloriss = require('./coloriss');

describe("01 init", function () {

	// Init

});

describe("02 - Hex colors", function () {
	
	// hex() func called

	it("should convert Hex color into valid 32bits hexadecimal color - 1", function () {
		var cs = new Coloriss('fff');
		assert.strictEqual(cs.hex(), '#FFFFFF');
	});

	it("should convert Hex color into valid 32bits hexadecimal color - 2", function () {
		var cs = new Coloriss('#000');
		assert.strictEqual(cs.hex(), '#000000');
	});

	it("should convert Hex color into valid 32bits hexadecimal color - 3", function () {
		var cs = new Coloriss('#FFFFFF');
		assert.strictEqual(cs.hex(), '#FFFFFF');
	});

	it("should convert Hex color into valid 32bits hexadecimal color - 4", function () {
		var cs = new Coloriss('#FfF23F');
		assert.strictEqual(cs.hex(), '#FFF23F');
	});

	it("should convert RGB color into valid 32bits hexadecimal color - 1", function () {
		var cs = new Coloriss('rgb(255, 255, 255)');
		assert.strictEqual(cs.hex(), '#FFFFFF');
	});

	it("should convert RGBA color into valid 32bits hexadecimal color - 1", function () {
		var cs = new Coloriss('rgba(255, 255, 255, 1)');
		assert.strictEqual(cs.hex(), '#FFFFFF');
	});

});

describe("03 - RGB colors", function () {

	// rgb() func called

	it("should convert hexadecimal color into RGB via color() method - 1", function () {

		var cs, rgb, ret;

		cs = new Coloriss();
		ret = cs.color('#fff').rgb();
		rgb = {r:255, g:255, b:255};
		assert.equal(typeof ret, 'object');
		assert.deepEqual(ret, rgb);
	});

	it("should convert hexadecimal color into valid RGB color - 1", function () {

		var cs, rgb, ret;

		cs = new Coloriss('#FfFfFF');
		ret = cs.rgb();
		rgb = {r:255, g:255, b:255};
		assert.equal(typeof ret, 'object');
		assert.deepEqual(ret, rgb);
	});

	it("should convert hexadecimal color into valid RGB color - 2", function () {

		var cs, rgb, ret;

		cs = new Coloriss('#000');
		ret = cs.rgb();
		rgb = {r:0, g:0, b:0};
		assert.equal(typeof ret, 'object');
		assert.deepEqual(ret, rgb);
	});

	it("should convert RGB color into valid RGB color - 1", function () {

		var cs, rgb, ret;

		cs = new Coloriss('rgb(0, 0, 0)');
		ret = cs.rgb();
		rgb = {r:0, g:0, b:0};
		assert.equal(typeof ret, 'object');
		assert.deepEqual(ret, rgb);
	});

	it("should convert RGBA color into valid RGB color - 1", function () {

		var cs, rgb, ret;

		cs = new Coloriss('rgba(0, 0, 0, 0.3)');
		ret = cs.rgb();
		rgb = {r:0, g:0, b:0};
		assert.equal(typeof ret, 'object');
		assert.deepEqual(ret, rgb);
	});

});

describe('04 - RGBA colors', function () {

	// rgba() func called

	it("should convert hexadecimal color into RGBA via color() method - 1", function () {

		var cs, rgba, ret;

		cs = new Coloriss();
		ret = cs.color('#fff').rgba();
		rgba = {a:1, r:255, g:255, b:255};
		assert.equal(typeof ret, 'object');
		assert.deepEqual(ret, rgba);
	});

	it("should convert RGB color into RGBA color - 1", function () {

		var cs, rgba;

		rgba = {a:1, r:255, g:255, b:255};
		cs = new Coloriss('rgb(255, 255, 255)');
		assert.deepEqual(cs.rgba(), rgba);
	});

	it("should convert hexadecimal color into RGBA color - 1", function () {

		var cs, rgba;

		rgba = {a:1, r:255, g:255, b:255};
		cs = new Coloriss('#fff');
		assert.deepEqual(cs.rgba(), rgba);
	});

	it("should convert RGBA color into RGBA color - 1", function () {

		var cs, rgba;

		rgba = {a:0.42, r:255, g:255, b:255};
		cs = new Coloriss('rgb(255, 255, 255, 0.42)');
		assert.deepEqual(cs.rgba(), rgba);
	});
});
