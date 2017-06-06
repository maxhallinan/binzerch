'use strict';

module.exports = (item, arr) => {
  let mid;
  let high = arr.length - 1;
  let low = 0;

  while (low <= high) {
    // https://research.googleblog.com/2006/06/extra-extra-read-all-about-it-nearly.html
    mid = (low + high) >>> 1;

    if (item === arr[mid]) {
      return mid;
    }

    if (item < arr[mid]) {
      high = mid - 1;
    }

    if (item > arr[mid]) {
      low = mid + 1;
    }
  }

  return -1;
};
