const { LinkedList, length, add } = require('./index');

test('test add value to a single node list', () => {
  const list = new LinkedList();
  add(list, 1);
  console.log(JSON.stringify(list, null, 2));
  expect(length(list)).toEqual(1);
});
