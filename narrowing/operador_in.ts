class Dog {
  fullName: string
  breed?: string

  constructor(fullName: string, breed?: string) {
    this.fullName = fullName

    if (breed) {
      this.breed = breed
    }
  }
}

const jon = new Dog('Jon')
const doe = new Dog('Doe', 'Idk')

function showDogDetails(dog: Dog) {
  if ('breed' in dog) {
    console.log(`O cachorro é da raça ${dog.breed}`)
  } else {
    console.log(`O cachorro é um SRD`)
  }
}

showDogDetails(jon)
showDogDetails(doe)
