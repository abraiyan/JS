class User {
  constructor() {}

  set name(value) {
    const temp = value.split(' ')
    this._firstName = temp[0]
    this._lastName = temp[1]
  }

  get name() {
    return this._firstName + ' -> ' + this._lastName
  }
}

const userOne = new User()
userOne.name = 'Ab Raiyan'
console.log(userOne.name)
