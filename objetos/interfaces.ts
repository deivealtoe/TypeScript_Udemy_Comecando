interface Point {
  x: number
  y: number
  z: number
}

function showCoords(point: Point) {
  console.log(`X: ${point.x} | Y: ${point.y} | Z: ${point.z}`)
}

showCoords({ x: 1, y: 2, z: 3 })


interface Person {
  name: string
}

interface Person {
  age: number
}

const me: Person = { name: 'Foo', age: 26 };

console.log(me)