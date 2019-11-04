import Entity from './Entity'

export default class Cat extends Animal {
  constructor({ name = 'Hank', age, lives = 9 }) {
    super({ name, age })
    this.lives = lives
  }

  kill() {
    console.log(this.name + ' kills.')
  }
}
