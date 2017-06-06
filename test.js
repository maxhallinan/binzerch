import test from 'ava';
import binzerch from '.';

test('returns the correct index', t => {
  const sorted = [ 'bar', 'baz', 'foo', 'qux', ];

  t.is(binzerch('bar', sorted), 0);
  t.is(binzerch('baz', sorted), 1);
  t.is(binzerch('foo', sorted), 2);
  t.is(binzerch('qux', sorted), 3);
  t.is(binzerch('ace', sorted), -1);
});
