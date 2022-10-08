function duplicate (arr) {
  let arrCopy = arr.concat(arr);
  return arrCopy
}

console.log(duplicate([1,2]))

let dupe = arr => {

  let emptyArr = []

  if (arr !== []) {
    console.log('please enter an array')
  }

  for (let i = 0; i < arr.length; i++) {
    emptyArr.push(arr[i])
  }

  return emptyArr
}

console.log(dupe([1,3]))