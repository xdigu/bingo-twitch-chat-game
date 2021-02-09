import { Document } from 'mongoose'
import { IBallEntity } from '../model/ball.model'

export class Ball implements Omit<IBallEntity, keyof Document> {
  checked: boolean

  constructor(public ballNumber: number) {
    this.checked = false
  }
}
