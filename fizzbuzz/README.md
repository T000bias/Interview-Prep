# Fizzbuzz Solution

## Instructions

Create a for loop that iterates up to 100 while outputting "fizz"
at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz"
at multiples of 3 and 5.

## Solution

1. Create your function & initial variables

```js
function solution() {
  let string1 = "fizz";
  let string2 = "buzz";
  let string3 = string1 + string2;
}
```

2. We need a loop that can go from 1 from 100;

```js
function solution() {
  let string1 = "fizz";
  let string2 = "buzz";
  let string3 = string1 + string2;

  for (let i = 0; i <= 100; i++) {
    console.log(i);
  }
}
```

3. Next use the modulo (remainder) operator to test if "i" is divisible
   by 3 and then test for 5

```js
function solution() {
  let string1 = "fizz";
  let string2 = "buzz";
  let string3 = string1 + string2;

  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0) {
      console.log(string1);
    } else if (i % 5 === 0) {
      console.log(string2);
    }
  }
}
```

4. Now we can test i for divisiblity in 3 and 5 at the same time.

```js
function solution() {
  let string1 = "fizz";
  let string2 = "buzz";
  let string3 = string1 + string2;

  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(string3);
    } else if (i % 3 === 0) {
      console.log(string1);
    } else if (i % 5 === 0) {
      console.log(string2);
    }
  }
}
```
