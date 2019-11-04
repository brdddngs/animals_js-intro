import Dog from './Dog'
import { brotliDecompressSync } from 'zlib'

export default class World {
  constructor() {
    this.createDog()
  }
  createDog() {
    new Dog({ target: document.body })
    setTimeout(() => this.createDog(), 5000)
  }
}
