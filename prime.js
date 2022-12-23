function isPrime(n)
{
    // Corner cases
    if (n <= 1) return false;
    if (n <= 3) return true;
     
    // This is checked so that we can skip
    // middle five numbers in below loop
    if (n%2 == 0 || n%3 == 0) return false;
     
    for (let i=5; i*i<=n; i=i+6)
        if (n%i == 0 || n%(i+2) == 0)
        return false;
     
    return true;
}
function nextPrime(N)
{
 
    // Base case
    if (N <= 1)
        return 2;
 
    let prime = N;
    let found = false;
 
    // Loop continuously until isPrime returns
    // true for a number greater than n
    while (!found) {
        prime++;
 
        if (isPrime(prime))
            found = true;
    }
 
    return prime;
}
// take input from the user
const x = 5;
if (isPrime(x)) {
    console.log(`${x} is a prime number`);
} else {
    console.log(`${x} is a not prime number`);
}

const nxtPrime = nextPrime(x);
console.log(`${nxtPrime} is the next prime number after 5`);
const diff=nxtPrime-x;
console.log(`${diff} is the difference next prime number X`);