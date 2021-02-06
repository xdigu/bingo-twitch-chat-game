import { ICardRepository } from '../ICardRepository'
import type { Card } from '../../entities/Card'

export class BingoCard implements ICardRepository {
  private cards: Card[] = []

  async create(data: Card): Promise<void> {
    this.cards.push(data)
  }
}
