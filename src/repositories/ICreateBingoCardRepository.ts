import type { Card } from '../entities/Card'

export interface ICreateBingoCardRepository {
  chatUserHasCard: (streamerName: string, userName: string) => Promise<boolean>
  create: (streamerName: string, userName: string, card: Card) => Promise<void>
}
