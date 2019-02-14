let vasya = { name: 'Вася' }
let petya = { name: 'Петя' }
let dasha = { name: 'Даша' }

let set = new Set([ vasya, petya, dasha ])

set.add(vasya)
console.log(set.size) // 3

set.delete(petya) // true
set.has(petya) // false

for (let el of set)
  console.log(el) // { name: 'Вася' }, { name: 'Даша' }

set.clear()