const assert = require("assert");


// strictEqual is useful for 'scalar' objects(?)
// equal uses == operator, and is now deprecated.
// strictEqual uses === operator, and is the one to use...

//assert.strictEqual("2", 2);     //(actual_result, expected_result) - different to assert in Python.


/*

// This will fail, not same object
assert.strictEqual([1, 2, 3], [1, 2, 3]);  


// This will pass - same object
const ary1 = [1, 2, 3];
assert.strictEqual(ary1, ary1); 



// Use a deepStictEqual instead for comparing non-scalar objects:

// This will now pass:
assert.deepStrictEqual([1, 2, 3], [1, 2, 3]);

*/
