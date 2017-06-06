# binzerch

Simple binary search.


## Install

```shell
$ npm install --save binzerch
```


## Usage

```js
const binzerch = require('binzerch');

binzerch('foo', ['bar', 'baz', 'foo']);
//=> 2

binzerch('qux', ['bar', 'baz', 'foo']);
//=> -1
```


## API

### binzerch(item, arr)

Returns the index of `item` in `arr` or `-1` if `item` is not found.

#### item

Type: `Number` or `String`

The value to search for.

#### arr

Type: `Array(Number)` or `Array(String)`

The sorted array to search in.


## License

MIT © [Max Hallinan](https://github.com/maxhallinan)
