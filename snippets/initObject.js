let obj1 = {}
// Not recomeded
let obj2 = new Object()

let obj3 = {
  0: 0,
  a: 1,
  'b': 2,
  "c": 3,
}

obj3.d = 4;
obj3['e'] = 5;
Object.defineProperty(obj3, 'f', { value: 6 });

console.log(obj3);

/*
{
  0: 0
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
}
*/
