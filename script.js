function firstNonRepeatedChar(str) {
 // Write your code here
	 const charCount = {};

  // Count occurrences of each character
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first non-repeated characte
  for (const char of str) {
    if (charCount[char] === 1) {
      return char; // Return the first non-repeated character
    }
  }

  return null;
 }
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
