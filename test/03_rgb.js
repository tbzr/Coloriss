var assert = require('assert');
var Coloriss = require('../coloriss');

module.exports = function () {

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

	it("should convert RGB color into valid RGB color as String - 1", function () {

		var cs, rgb;

		rgb = "rgb(0, 0, 5)";
		cs = new Coloriss(rgb);
		assert.strictEqual(cs.rgb(true), rgb);
	});

	it("should convert RGB color into valid RGB color as String using dedicated method - 1", function () {

		var cs, rgb;

		rgb = "rgb(0, 0, 5)";
		cs = new Coloriss(rgb);
		assert.strictEqual(cs.rgbAsStr(), rgb);
	});

};