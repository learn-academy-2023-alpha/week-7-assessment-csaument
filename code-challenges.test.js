// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

const { log } = require("console")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
describe("decodeObject", () => {
      const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
      ]
      // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

      it("takes in an array of objects and returns an array with a sentence", () => {
            expect(decodeObject(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
      })
})

// ReferenceError: encodeWords is not defined

// b) Create the function that makes the test pass.

// Create a function to process an array of JSON/Objects into sentences
// Input: an array of objects. Each object has a key for name and a key for occupation. Name is a string. Occupation is a string.
// Output: an array of strings
// Use .map to iterate through the array
// Pull the value from :name, split to words, map across the words, capitalize the first letter and slice the rest of the word, then join everything back
// Pull the value from :occupation
// Use string interpolation to combine the elements
// Return the resulting array

const decodeObject = (arr) => {
      return arr.map(obj => `${obj['name'].split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} is ${obj['occupation']}.`)
}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.439 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.34s.

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("remainder3", () => {
      const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
      // Expected output: [ 2, 0, -1, 0 ]
      const output1 = [ 2, 0, -1, 0 ]
      const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
      // Expected output: [ 2, 1, -1 ]
      const output2 = [ 2, 1, -1 ]

      it("takes in a mixed data array and returns an array ", () => {
            expect(remainder3(hodgepodge1)).toEqual(output1)
            expect(remainder3(hodgepodge2)).toEqual(output2)
      })
})

// ReferenceError: remainder3 is not defined

// b) Create the function that makes the test pass.

// Create a function to process arrays and return remainder of numbers when divided by 3
// Input: an array of mixed datatypes
// Output: an array of numbers/integers
// Filter the array to numbers
// Map array of numbers
// Apply %
// Return the array of remainders

const remainder3 = (arr) => {
      return arr.filter(element => 'number' == typeof element).map(num => num % 3)
}

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.441 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.92s.

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("cubeSum", () => {
      const cubeAndSum1 = [2, 3, 4]
      // Expected output: 99
      const output1 = 99
      const cubeAndSum2 = [0, 5, 10]
      // Expected output: 1125
      const output2 = 1125

      it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
            expect(cubeSum(cubeAndSum1)).toEqual(output1)
            expect(cubeSum(cubeAndSum2)).toEqual(output2)
      })
})

// ReferenceError: cubeSum is not defined

// b) Create the function that makes the test pass.

// Create a function to sum the cubes of numbers
// Input: an array of numbers
// Output: a number
// Use reduce to cube each number and add it to the accumulator
// Return the result

const cubeSum = (arr) => {
      return arr.reduce((acc, num) => acc + num ** 3,0)
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.349 s
// Ran all test suites.
// ✨  Done in 1.71s.