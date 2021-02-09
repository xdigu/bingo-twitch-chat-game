import { Document } from 'mongoose'
import { IBallEntity } from '../model/ball.model'

export class Ball implements Omit<IBallEntity, keyof Document> {
  public checked: boolean

  constructor(public ballNumber: number) {
    this.checked = false
  }
}
