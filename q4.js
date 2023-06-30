// Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.

// Test Data :
// ([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
// ([2, 3, 0, 5, 7, 8, true, false]) -> 25

const calculateSum=(numbers)=>{
    let total = 0;

    
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === 'number') {
      total += numbers[i];
    }
  }
  return total;    
    }
    

console.log(calculateSum([2, "11", 3, "a2", false, 5, 7, 1]));