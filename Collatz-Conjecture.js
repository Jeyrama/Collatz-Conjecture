/*
The Collatz conjecture (also known as 3n+1 conjecture) 
is a conjecture that applying the following algorithm 
to any number we will always eventually reach one.

Your task is to make a function hotpo that takes a 
positive n as input and returns the number of times 
you need to perform this algorithm to get n = 1.
*/


// Solution

let hotpo = function(n, acc = 0) {
  if (n <= 1) {
    return acc;
  } else {
    return hotpo(n%2==0 ? n/2 : 3*n+1, acc+1);
  }
}