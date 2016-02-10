var assert = require('assert');
var Coloriss = require('../coloriss');

module.exports = function () {

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

	it("should convert RGBA color into valid RGBA color as String - 1", function () {

		var cs, rgba;

		rgba = "rgba(10, 210, 115, 0.2)";
		cs = new Coloriss(rgba);
		assert.strictEqual(cs.rgba(true), rgba);
	});

	it("should convert RGBA color into valid RGBA color as String using dedicated method - 1", function () {

		var cs, rgb;

		rgb = "rgba(10, 210, 115, 0.2)";
		cs = new Coloriss(rgb);
		assert.strictEqual(cs.rgbaAsStr(), rgb);
	});	
};