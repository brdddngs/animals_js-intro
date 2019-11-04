import Entity from './Entity'

export default class SpeechBubble extends Entity {
  constructor(props) {
    super({ ...props, className: 'speechbubble' })
  }
}
