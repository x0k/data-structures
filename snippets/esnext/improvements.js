let name = 'Roman'
let gender = Symbol("gender")
let age = 'AGE'

let author = {
  name,
  gender: 'male',
  [age.toLowerCase()]: 21,
  hi () {
    console.log('Hi')
  },
}

let [ a, b, ...c ] = [1, 2, 3, 4, 5]
console.log(a, b, c) // 1, 2, [3, 4, 5]

let obj = { ...author, name: 'Krasilnikov Roman' }
console.log(obj) // { name: 'Krasilnikov Roman', ... }

let { name: fullName, lang = 'JS' } = obj
console.log(fullName, country) // Krasilnikov Roman, JS
