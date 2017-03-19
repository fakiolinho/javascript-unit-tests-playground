import test from 'tape';

import filtered from './reduce';

test('test filtered method', t => {
  t.deepEqual(filtered({1: 5, 3: 6}), {3: 6});
  t.end();
});
