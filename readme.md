# binzerch

Simple binary search.


## Install

```
$ npm install --save binzerch
```


## Usage

```js
const binzerch = require('binzerch');

binzerch('foo', ['foo', 'bar', 'baz']);
//=> 0

binzerch('qux', ['foo', 'bar', 'baz']);
//=> null
```


## API

### binzerch(item, arr)

`(x, [x]) -> Number`

Returns the index of `item` in `arr` or `null` if the item is not found.

#### item

Type: `Number` or `String`

The value to search for.

#### arr

Type: `Array[String]` or `Array[Number]`<br>

The sorted array to search in.


## License

MIT © [Max Hallinan](https://github.com/maxhallinan)
