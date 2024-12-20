# Stack Overflow Bug in JavaScript

This repository demonstrates a common error in JavaScript: stack overflow errors caused by unbounded recursion. The `foo` function, as implemented in `bug.js`, recursively calls itself without a proper base case, leading to a stack overflow when the input 'a' is sufficiently large.  The solution provided in `bugSolution.js` addresses this by adding a check to prevent excessive recursion, ensuring that the function completes successfully for all valid inputs. 

## How to reproduce

1. Clone this repository.
2. Open `bug.js` and run the `foo` function with a large value for the parameter `a`. You should observe a stack overflow error in your JavaScript environment.  
3. Run the solution in `bugSolution.js` to see the corrected version.