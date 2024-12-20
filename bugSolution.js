function foo(a, b) {
  if (a === 0) {
    return b; 
  } else if (a < 0) {
    return b; //Added base case to handle negative input
  } else if (a > 1000) { //Added a limit to prevent stack overflow
    return Infinity; 
  }
  return foo(a - 1, a + b); 
}