interface Character {
  name: string
}

interface Gun {
  type: string
  caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
  name: 'Arnold',
  type: 'Submachine',
  caliber: 0.9
}

console.log(arnold)
