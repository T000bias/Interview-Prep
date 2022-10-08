# Duplicate an Array

## Instruction

Make this work: duplicate([1,2,3,4,5]); //[1,2,3,4,5]

## Solution #1

1. Create a function called duplicate and create a variable that
   is going to copy the argument array.

```js
function duplicate(arr) {
  let arrCopy = arr;
}
```

2. Use the concat method to concat arr onto itself and return that value

```js
function duplicate(arr) {
  let arrCopy = arr.concat(arr);
  return arrCopy;
}
```

## Solution #2 (Solution still in the works)

```js
function duplicate(arr) {}
```
