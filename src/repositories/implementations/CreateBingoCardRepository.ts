import { ICreateBingoCardRepository } from '../ICreateBingoCardRepository'
import type { Card } from '../../entities/Card'

export class CreateBingoCardRepository implements ICreateBingoCardRepository {
  private cards: Card[] = []

  async create(data: Card): Promise<void> {
    this.cards.push(data)
  }
}
