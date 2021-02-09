import { Document } from 'mongoose'

import { IGameEntity } from '../model/game.model'
import { Ball } from './Ball'
import { Card } from './Card'

export class Game implements Omit<IGameEntity, keyof Document> {
  started: boolean
  ended: boolean
  cards: Card[]
  balls: Ball[]

  constructor(readonly streamerName: string) {
    this.started = false
    this.ended = false
    this.cards = []
    this.balls = this.populateBalls()
  }

  private populateBalls(): Ball[] {
    return [...new Array(90).fill(null).map((_, idx) => new Ball(idx + 1))]
  }
}
