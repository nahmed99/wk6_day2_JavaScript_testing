const assert = require('assert');
const Taxi = require('../taxi.js'); // Don't need to use the .js in the file name?

// a function from mocha suite: describe(name_of_tests, function - inline in the case below)
describe('Taxi', function () {

    // These are names for the tests:
    it("should have a manufacturer", function() {
        // Arrange
        const taxi = new Taxi("Toyota", "Prius")

        // Act
        const actual_manufac = taxi.manufacturer;

        // Assert
        assert.strictEqual(actual_manufac, "Toyota")    // (actual, expected)
    });


    // xit("should have a model", function() {    // Don't run this test, but count it as a test to be run.
    it("should have a model", function() {
        // Arrange
        const taxi = new Taxi("Toyota", "Prius")

        // Act
        const actual_model = taxi.model;

        // Assert
        assert.strictEqual(actual_model, "Prius");

    });


})