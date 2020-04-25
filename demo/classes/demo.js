<<<<<<< HEAD
=======
var a = 5

console.log(a)
>>>>>>> fe277fcee38e1b953a813f52fa2d0a9fceacf0f6
class Pet {
  constructor (props) {
    this.props = props
  }

  getName () {
    return this.props.name
  }

  getSpecies () {
    return this.props.species
  }

  getSpeech () {
<<<<<<< HEAD
    return 'I make this Sound: '
  }

    getIdentity = () => {
      console.log(this)
    }
=======
    return 'I make this sound: '
  }

  getIdentity = () => {
    console.log(this)
  }

  // getSum = (a,b) => a + b
  getSum = (a, b) => {
    return a + b
  }
>>>>>>> fe277fcee38e1b953a813f52fa2d0a9fceacf0f6
}

class Cat extends Pet {
  constructor (props) {
    super(props)
    this.props.species = 'cat'
  }

  getSpeech () {
<<<<<<< HEAD
    return super.getSpeech() + 'Meow!'
  }
}

=======
    return super.getSpeech() + 'Meow!!'
  }
}
>>>>>>> fe277fcee38e1b953a813f52fa2d0a9fceacf0f6
class Dog extends Pet {
  constructor (props) {
    super(props)
    this.props.species = 'dog'
  }

  getSpeech () {
<<<<<<< HEAD
    return super.getSpeech() + 'ruff ruff!'
  }
}
function sayName (pet) {
  console.log(`my name is ${pet.getName()}, and i am a ${pet.getSpecies()}`)
}

var myPet = new Cat({ name: 'Luna' })
sayName(myPet)
myPet.getIdentity()
var myIdentity = myPet.getIdentity

var myDog = new Dog({ name: 'Fido' })
sayName(myDog)
myDog.getIdentity()
=======
    return super.getSpeech() + 'Ruff Ruff!!'
  }
}
function sayName (pet) {
  console.log(`My name is ${pet.getName()}, and I am a ${pet.getSpecies()}`)
  console.log(`${pet.getSpeech()}`)
}
var myPet = new Cat({ name: 'Luna' })
sayName(myPet)
myPet.getIdentity()
// Assign the method getIdentity to the variable myIdentity
var myIdentity = myPet.getIdentity
// Call the new function using the myIdentity variable
myIdentity()
var myDog = new Dog({ name: 'Fido' })
sayName(myDog)
myDog.getIdentity()
console.log(myDog.getSum(10, 20))
>>>>>>> fe277fcee38e1b953a813f52fa2d0a9fceacf0f6
