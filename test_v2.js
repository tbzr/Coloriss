/*
* @Author: Thomas Bazire
* @Date:   2019-01-02 13:27:36
* @Last Modified by:   Thomas Bazire
* @Last Modified time: 2019-01-02 14:02:44
*/

const Coloriss = require('./lib/Coloriss');


var c1 = new Coloriss('#fff');
console.log(`C1`, c1.hex(), c1.rgb(), c1.rgba(), c1.rgb(true));

var c2 = new Coloriss('#aeb');
console.log(`C2`, c2.hex(), c2.rgb(), c2.rgba(), c2.rgb(true));

try {
	var c3 = new Coloriss('#4343434');
	console.log(`C3`, c3.hex(), c3.rgb(), c3.rgba(), c3.rgb(true));
} catch (err) {
	console.log(`error: `, err.message);
}

var c4 = new Coloriss('rgb(20, 10, 0)');
console.log(`C4`, c4.hex(), c4.rgb(), c4.rgba(), c4.rgb(true));

var c5 = new Coloriss('rgba(50, 100, 200, 0.5)');
console.log(`C5`, c5.hex(), c5.rgb(), c5.rgba(), c5.rgb(true));

try {
	var c6 = new Coloriss('rgb(20, 10, 0');
	console.log(`C6`, c6.hex(), c6.rgb(), c6.rgba(), c6.rgb(true));
} catch (err) {
	console.log(`error: `, err.message);
}

try {
	var c7 = new Coloriss('rgba(50, 100, 200, 0, 5)');
	console.log(`C7`, c7.hex(), c7.rgb(), c7.rgba(), c7.rgb(true));
} catch (err) {
	console.log(`error: `, err.message);
}