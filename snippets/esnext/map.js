let map = new Map([
  ['1', 'str1'],
  [1, 'num1'],
  [true, 'bool1']
])

console.log(map.get(1)) // 'num1'
console.log(map.get('1')) // 'str1'
console.log(map.size) // 3

map.set(false, 'bool2')
map.delete(true) // true
map.has('1') // true

map.keys() // [ '1', 1, false ]
map.values() // [ 'str1', 'num1', 'bool2' ]
map.entries() // [ ['1', 'str1'], [1, 'num1'], [false, 'bool2'] ]

for(let [key, val] of map)
  console.log(`${key}: ${val}`) // 1: str1, 1: num1

map.clear()