const { add, subract } = require('./app');

// A simple test
if (add(2, 3) !== 5) {
  console.error('Test failed: 2 + 3 should equal 5');
  process.exit(1);
}

if (add(-1, 1) !== 0) {
  console.error('Test failed: -1 + 1 should equal 0');
  process.exit(1);
}

if (subract(5, 3) !== 2) {
  console.error('Test failed: -5 - 3 should equal 2');
  process.exit(1);
}

if (subract(3, -3) !== 6) {
  console.error('Test failed 3 - -3 should equal 6');
  process.exit(1);
}

console.log('All tests passed!');
