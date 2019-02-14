const data = `{
  "name":        "JSON",
  "fullName":    "JavaScript Object Notation",
  "description": "Lightweight format for storing and transporting data",
  "types": {
    "string":  "text",
    "number":  123,
    "object":  { "type": "object" },
    "array":   [ "array" ],
    "boolean": true,
    "null":    null
  },
  "rules": [
    { "data":   "name: value pairs" },
    { "data":   "separated by commas" },
    { "object": "curly braces" },
    { "array":  "square brackets" }
  ]
}`

let { name, fullName } = JSON.parse(data);

let names = JSON.stringify([ name, fullName ])
console.log(names) // ["JSON", "JavaScript Object Notation"]
