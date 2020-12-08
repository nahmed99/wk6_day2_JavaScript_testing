
// Use 'npm test' in terminal to run this file...as we have updated package.json to run this file as the test (hence 'npm test')

const assert = require('assert');
const Taxi = require('../taxi.js'); // Don't need to use the .js in the file name?

// a function from mocha suite: describe(name_of_tests, function - inline in the case below)
describe('Taxi', function () {

    let taxi;

    // This function will run before each 'it' function...
    beforeEach(function() {
        taxi = new Taxi("Toyota", "Prius")
    });

    // These are names for the tests:
    it("should have a manufacturer", function() {
        // Arrange
        // const taxi = new Taxi("Toyota", "Prius")  - this is replaced with the Taxi in the beforeEach() function.

        // Act
        const actual_manufac = taxi.manufacturer;

        // Assert
        assert.strictEqual(actual_manufac, "Toyota")    // (actual, expected)
    });


    // xit("should have a model", function() {    // Don't run this test, but count it as a test to be run.
    it("should have a model", function() {
        // Arrange
        // const taxi = new Taxi("Toyota", "Prius")  - this is replaced with the Taxi in the beforeEach() function.

        // Act
        const actual_model = taxi.model;

        // Assert
        assert.strictEqual(actual_model, "Prius");

    });


    it('should be able to add a passenger', function () {
        // Arrange - partly done Taxi was added in beforeEach()
        const kidda = "Kidda";

        // Act
        taxi.addPassenger(kidda);

        // Assert
        assert.deepStrictEqual(taxi.passengers, ["Kidda"]);     //(actual, expected)
    });

})