let numbers: number[] = [1, 2, 3]

numbers.push(4)
numbers.push(5)

console.log(numbers)
console.log(typeof(numbers))

let names: string[] = ["Foo", 'Bar', `Jon`]

console.log(names)
console.log(typeof(names))

// Outra sintaxe de array
const nums: Array<number> = [100, 200, 300]
const strings: Array<string> = ["Doe"]

strings.push("Jon")

console.log(strings)
console.log(typeof(strings))