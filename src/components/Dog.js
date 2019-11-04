import Entity from './Entity'
import Eye from './eye'
import SpeechBubble from './SpeechBubble'

export default class Dog extends Entity {
  constructor(props) {
    super({ name: 'dog', ...props, className: 'dog' })
    this.createEyes()
    this.handleSpeak()
    //new SpeechBubble({ target: this.el })
  }

  handleSpeak() {
    this.el.addEventListener('click', () => {
      const bubble = document.createElement('div')
      bubble.className = 'speechbubble'
      bubble.textContent = this.name + ' says: woof'
      this.el.appendChild(bubble)
    })
  }

  createEyes() {
    new Eye({ target: this.el })
    new Eye({ target: this.el })
  }

  tellAge() {
    console.log(this.name + ' says: ' + this.age)
  }

  //speak() {
  //console.log(this.name + ' says: woof')
  // }
}
