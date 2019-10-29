export default class Animal {
  constructor({ name = 'Animal', age } = {}) {
    this.name = name
    this.age = age
    this.speak()

    this.render()
  }

  render() {
    const el = document.createElement('div')
    el.className = 'box'
    el.style.position = 'absolute'
    el.style.bottom = 0
    el.style.left = Math.round(Math.random() * 300) + 'px'
    el.style.color = '#2e2e2e'
    el.style.height = Math.round(50 + Math.random() * 100) + 'px'
    el.style.width = Math.round(50 + Math.random() * 100) + 'px'
    el.style.backgroundColor = `hsl(${Math.round(
      Math.random() * 360
    )}, 90%, 60%)`
    document.body.appendChild(el)
  }

  speak() {
    console.log(this.name + ' speaks.')
  }
}

// oder unten 'export default Animal'
