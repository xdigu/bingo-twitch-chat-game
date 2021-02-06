import type { Card } from '../entities/Card'

export interface ICardRepository {
  create: (data: Card) => Promise<void>
}
