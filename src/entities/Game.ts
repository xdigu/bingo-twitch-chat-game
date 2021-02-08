import { Card } from './Card'

export class Game {
  readonly streamerName: string
  started: boolean
  ended: boolean
  cards: Card[]

  constructor(streamerName: string) {
    this.streamerName = streamerName
    this.started = false
    this.ended = false
    this.cards = []
  }
}
