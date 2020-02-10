class Pet {
    constructor(props)  {
        this.props = props;
    }
    getName()   {
        return this.props.name;
    }
    getSpecies()    {
        return this.props.species;
    }
    getSpeech() {
        return "I make this Sound: ";
    }
    getIdentity = () => {
        console.log(this);
    }

   
}

class Cat extends Pet {
    constructor (props) {
        super(props);
        this.props.species = "cat";
    }
    getSpeech() {
        return super.getSpeech() + "Meow!";
    }
}

class Dog extends Pet {
    constructor (props) {
        super(props);
        this.props.species = "dog";
    }
    getSpeech() {
        return super.getSpeech() + "ruff ruff!";
    }
}
function sayName(pet)   {
    console.log(`my name is ${pet.getName()}, and i am a ${pet.getSpecies()}`);

}

var myPet = new Cat({name:"Luna"});
sayName(myPet);
myPet.getIdentity();
var myIdentity = myPet.getIdentity;

var myDog = new Dog ({name:"Fido"});
sayName(myDog);
myDog.getIdentity();

