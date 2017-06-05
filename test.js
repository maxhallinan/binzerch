import test from 'ava';
import binzerch from '.';

test('Throws a TypeError if second argument is not an array.', t => {
	[undefined, null, true, 1, '', {}, () => {}].forEach(x => {
		const err = t.throws(() => binzerch(x, x), TypeError);

		t.is(err.message, `Expected a string, got ${typeof x}`);
	});

	t.notThrows(() => binzerch('foo', ['foo', 'bar', 'baz']));
});
