export default class Entity {
  constructor({
    name = 'Some entity',
    target = document.body,
    className = 'entity'
  } = {}) {
    this.name = name
    this.target = target
    this.className = className
    this.render()
  }

  render() {
    const el = document.createElement('div')
    el.className = this.className
    el.style.left = Math.round(Math.random() * window.innerWidth) + 'px'
    el.style.background = `hsl(${Math.round(Math.random() * 360)}, 70%, 70%)`
    this.target.appendChild(el)
    this.el = el
  }
}

// oder unten 'export default Animal'
