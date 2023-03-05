const name = "bernard Malunga"

console.log(name)

function place(){
    console.log("I am from Malawi")
}

place()

let Person = {name:"Theo",
              age:25,
            birthPlace:"lilongwe"}

console.log(Person.name)

function People(){
  let name = "Theo"
  if (name =!! "Theo"){
    console.log("Hello")
  }
}

People()

function Job(){
  let Employer = "Legend Metals"
  if (Employer =!! "Legend Metals"){
    console.log("Go to work tomorrow")
  }
  else if(Employer =! "Legende Metals"){
    console.log("Take a rest")
  }
}

Job()

function Nature(name, age, birthday, birthPlace, hobby){
  this.name = name
  this.age = age
  this.birthday = birthday
  this.birthPlace = birthPlace
  this.hobby = hobby

  Nature.prototype.FirstPerson = function() {
    return this.name+ this.age + this.birthday + this.birthPlace + this.hobby
    
  }
}

theo = new Nature("Theo", 25, "1997/05/15", "Malawi", "Watching movies")
console.log(theo.FirstPerson())

class Food{

  constructor(name){
    this.name = name
  }

  getName(){
    return this.name
  }
}

let FirstFood = new Food ("Nsima and Beans")
console.log(FirstFood.getName())

let SecondFood = new Food ("Rice and Chicken")
console.log(SecondFood.getName())

class Animal{
  constructor(name){
    this.setName(name)
  }
  getName(){
    return this.name

  }

  setName(newName){
    newName = newName.trim()
    if (newName === ""){
      throw "the name cannot be empty"
    }
    this.name = newName
  }
}

let FirstAnimal = new Animal("Cat")
console.log(FirstAnimal.getName())

FirstAnimal.setName("Hyena")
console.log(FirstAnimal.getName())

