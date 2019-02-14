let arr = [ 1, 2, 3 ]

for (let i = 0; i < arr.length; i++)
  console.log(arr[i]) // 1, 2, 3

for (let val of arr)
  console.log(val) // 1, 2, 3

arr.forEach(val => console.log(val)) // 1, 2, 3

console.log(arr.map(el => el * 2)) // [ 2, 4, 6 ]

console.log(arr.filter(val => val > 1)) // [ 2, 3 ]

console.log(arr.reduce((acc, val) => acc + val)) // 6

console.log(arr.find(el => el > 1)) // 2
