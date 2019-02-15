const OPERATORS = {
  '+': [1, (b, a) => a + b],
  '-': [1, (b, a) => a - b],
  '*': [2, (b, a) => a * b],
  '/': [2, (b, a) => a / b],
}

function* parse (infixExpression) {
  let value = ''
  for (let char of infixExpression) {
    if ('0123456789.'.includes(char))
      value += char
    else if (value) {
      yield Number(value)
      value = ''
    }
    if (char in OPERATORS || '()'.includes(char))
      yield char
  }
  if (value)
    yield Number(value)
}

function* toPostfix (parsedExpression) {
  const stack = []
  const last = (arr) => arr[arr.length - 1]
  for (let token of parsedExpression) {
    if (token in OPERATORS) {
      while (
        stack.length && last(stack) !== '(' &&
        OPERATORS[token][0] <= OPERATORS[last(stack)][0]
      )
        yield stack.pop()
      stack.push(token)
    } else if (token === ')')
        while (stack.length) {
          let operand = stack.pop()
          if (operand === '(')
            break
          yield operand
        }
    else if (token === '(')
        stack.push(token)
    else
        yield token
  }
  while (stack.length)
    yield stack.pop()
}

function calc (postfixExpression) {
  const stack = []
  for (let token of postfixExpression)
    if (token in OPERATORS)
      stack.push(OPERATORS[token][1](stack.pop(), stack.pop()))
    else
      stack.push(token)
  return stack.pop()
}

function eval (expression) {
  const parsed = parse(expression)
  const polish = toPostfix(parsed)
  return calc(polish)
}