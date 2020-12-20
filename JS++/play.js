const Student = function (id, name, grade) {
  this.id = id
  this.name = name
  this.grade = grade
}

Student.prototype.getDetails = function () {
  return `Name : ${this.name}, ID : ${this.id}, grade: ${this.grade}`
}

const studentOne = new Student('101', 'Ab Raiyan', 'A')
console.log(studentOne.getDetails())

studentOne.getDetails = function () {
  return 'Khao Mara'
}

console.log(studentOne.getDetails())
