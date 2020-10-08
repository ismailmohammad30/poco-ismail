Write a function that returns the GCD (greatest common divisor) of 3 integers. 

Example: <br>
Input: 16, 24, 64 <br>
Output: 8

Estimated time: 15 minutes <br>
Total points: 15
var gcd = function(a, b) {
    if (b == 0) {
        return a;
    }
return gcd(b, a % b);
};
console.log(gcd(1263262,553443));
//11