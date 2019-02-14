let obj = { a: 1, b: 2, c: 4, }

for (let key in obj)
  console.log(key) // a, b, c

console.log('a' in obj) // true

console.log(Object.keys(obj)) // [ a, b, c ]

console.log(Object.values(obj)) // [ 1, 2, 4 ]

for (let [key, val] of Object.entries(obj))
  console.log(`${key}: ${val}`) // a: 1, b: 2, c: 4

Object.seal(obj)
console.log(Object.isSealed(obj)) // true

Object.freeze(obj)
console.log(Object.isFrozen(obj)) // true