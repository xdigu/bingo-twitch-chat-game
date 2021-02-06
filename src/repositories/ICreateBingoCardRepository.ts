import type { Card } from '../entities/Card'

export interface ICreateBingoCardRepository {
  create: (data: Card) => Promise<void>
}
