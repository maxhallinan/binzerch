'use strict';

const isArr = function (x) {
	return Object.prototype.toString.call(x) === '[object Array]';
}

module.exports = function (item, arr) {
	if (!isArr(arr)) {
		throw new TypeError(`Expected a string, got ${typeof arr}`);
	}

	return arr;
};
