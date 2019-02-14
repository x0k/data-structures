let arr = [ 1, 2, 3, 4, 5 ]

console.log(Array.isArray(arr)) // true

console.log(arr.includes(3)) // true
console.log(arr.indexOf(3)) // 2
console.log(arr.indexOf(6)) // -1

arr.push(6) // 6
arr.unshift(0) // 7
console.log(arr) // [ 0, 1, 2, 3, 4, 5, 6 ]

arr.pop() // 6
arr.shift() // 0
console.log(arr) // [ 1, 2, 3, 4, 5 ]

/**
 * @param {number} from
 * @param {number} count to remove
 * @param {...any} items to add
 */
arr.splice(1, 3, 4, 3, 2) // [ 1, 4, 3, 2, 5 ]
