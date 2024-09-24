function indexOfIgnoreCase(s1, s2) {
  // Convert both strings to lowercase for case-insensitive comparison
  const lowerS1 = s1.toLowerCase();
  const lowerS2 = s2.toLowerCase();
  
  // Return the index of first occurrence of lowerS2 in lowerS1
  return lowerS1.indexOf(lowerS2);
}

// Test the function
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
