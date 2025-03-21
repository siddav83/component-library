const { add } = require('./app');

// A simple test
if (add(2, 3) !== 5) {
  console.error('Test failed: 2 + 3 should equal 5');
  process.exit(1);
}

if (add(-1, 1) !== 0) {
  console.error('Test failed: -1 + 1 should equal 0');
  process.exit(1);
}

console.log('All tests passed!');
