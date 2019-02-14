let obj = {
  type: 'report',
  theme: 'Data structures in JavaScript',
  author: 'Krasilnikov Roman',
  start: function () {
    console.log(`Hi, my name is ${obj.author}!`)
  },
  done: false,
  prop: 'value',
}

console.log(obj.type) // report

console.log(obj['theme']) // Data structures in JavaScript

obj.start() // Hi, my name is Krasilnikov Roman

obj.end = function () {
  console.log('Thanks for attention')
  obj.done = true
}

delete obj.prop // true