function sum(a: string | number, b: string | number) {
  if (typeof(a) === 'string' && typeof(b) === 'string') {
    console.log(parseFloat(a) + parseFloat(b))
  } else if (typeof(a) === 'number' && typeof(b) === 'number') {
    console.log(a + b)
  } else {
    console.log('Impossível realizar a soma')
  }
}

sum('1', '2')
sum(1, 2)
sum('1', 2)


function operations(arr: number[], operation?: string | undefined) {
  if (operation) {
    if (operation === 'sum') {
      const sum = arr.reduce((i, total) => i + total)
      console.log(sum)
    } else if (operation === 'multiply') {
      const multiplied = arr.reduce((i, total) => i * total)
      console.log(multiplied)
    }
  } else {
    console.log('Por favor, defina uma operação!')
  }
}

operations([1, 2, 3], 'sum')
operations([1, 2, 3], 'multiply')
operations([1, 2, 3])
