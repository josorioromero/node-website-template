import test from 'tape';

test('A sample test', assert => {
  const actual = true;
  const expected = true;
  const msg = `This is a sample test for about, will always pass!`;
  assert.equal(actual, expected, msg);
  assert.end();
});
