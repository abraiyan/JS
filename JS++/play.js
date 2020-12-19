class Student {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
  getBio() {
    return `${this.firstName} is ${this.age}`
  }
  setName(fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
  }
}

const studentOne = new Student('AB', 'Raiyan', 21)
const studentTwo = new Student('John', 'Doe', 23)

console.log(studentOne.getBio())
studentOne.setName('Nasrat Yousha')
console.log(studentOne.getBio())
