// 1. Check operations for the first number (153)
console.log("=========================================");
console.log("Ex - Number :- 153");
console.log("=========================================");

let n1 = 153;

// Task A: Sum of first n numbers
let sum1 = 0;
for (let i = 1; i <= n1; i++) {
    sum1 = sum1 + i;
}
console.log("Sum of first 153 numbers: " + sum1);

// Task B: Table of n
console.log("Table of 153:");
for (let i = 1; i <= 10; i++) {
    console.log("153 x " + i + " = " + (n1 * i));
}

// Task C: Sum of all digits
let temp1 = n1;
let digitSum1 = 0;
while (temp1 > 0) {
    let lastDigit = temp1 % 10;
    digitSum1 = digitSum1 + lastDigit;
    temp1 = Math.floor(temp1 / 10);
}
console.log("Sum of its digits: " + digitSum1);

// Task D: Check Armstrong number
let tempArmstrong1 = n1;
let armSum1 = 0;
while (tempArmstrong1 > 0) {
    let d = tempArmstrong1 % 10;
    armSum1 = armSum1 + (d * d * d); // Simple cube without Math.pow
    tempArmstrong1 = Math.floor(tempArmstrong1 / 10);
}
if (armSum1 == n1) {
    console.log("Is it an Armstrong number? Yes");
} else {
    console.log("Is it an Armstrong number? No");
}

// Task E: Check Prime number
let isPrime1 = "Yes";
if (n1 <= 1) {
    isPrime1 = "No";
} else {
    for (let i = 2; i < n1; i++) { // Simple loop up to n
        if (n1 % i == 0) {
            isPrime1 = "No";
            break;
        }
    }
}
console.log("Is it a prime number? " + isPrime1);

// Task F: Print all its factors
let factorList1 = "";
for (let i = 1; i <= n1; i++) {
    if (n1 % i == 0) {
        factorList1 = factorList1 + i + ", ";
    }
}
console.log("Factors: " + factorList1);


// ====================================================
// Instruction: "At Least 5 variables to check"
// Ab baki 4 variables ko check karne ke liye simple cases
// ====================================================

// Variable 2: 139
console.log("=========================================");
console.log("Ex - Number :- 139");
console.log("=========================================");
let n2 = 139;
let sum2 = 0;
for(let i=1; i<=n2; i++) { sum2 += i; }
console.log("Sum of first 139 numbers: " + sum2);

let temp2 = n2;
let digitSum2 = 0;
while(temp2 > 0) {
    digitSum2 += (temp2 % 10);
    temp2 = Math.floor(temp2 / 10);
}
console.log("Sum of its digits: " + digitSum2);


// Variable 3: 7
console.log("=========================================");
console.log("Ex - Number :- 7");
console.log("=========================================");
let n3 = 7;
let isPrime3 = "Yes";
for(let i=2; i<n3; i++) {
    if(n3 % i == 0) { isPrime3 = "No"; break; }
}
console.log("Is it a prime number? " + isPrime3);


// Variable 4: 12
console.log("=========================================");
console.log("Ex - Number :- 12");
console.log("=========================================");
let n4 = 12;
let factorList4 = "";
for(let i=1; i<=n4; i++) {
    if(n4 % i == 0) { factorList4 = factorList4 + i + ", "; }
}
console.log("Factors: " + factorList4);


// Variable 5: 371
console.log("=========================================");
console.log("Ex - Number :- 371");
console.log("=========================================");
let n5 = 371;
let tempArmstrong5 = n5;
let armSum5 = 0;
while(tempArmstrong5 > 0) {
    let d = tempArmstrong5 % 10;
    armSum5 += (d * d * d);
    tempArmstrong5 = Math.floor(tempArmstrong5 / 10);
}
if(armSum5 == n5) {
    console.log("Is it an Armstrong number? Yes");
} else {
    console.log("Is it an Armstrong number? No");
}