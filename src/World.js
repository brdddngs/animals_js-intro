import Dog from './Dog'

export default class World {
  constructor() {
    this.createDog()
  }
  createDog() {
    new Dog()
    setTimeout(() => this.createDog(), 1000)
  }
}
