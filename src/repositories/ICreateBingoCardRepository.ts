import type { Card } from '../entities/Card'

export interface ICreateBingoCardRepository {
  streamerHasValidGame: (streamerName: string) => Promise<boolean>
  chatUserHasCard: (streamerName: string, userName: string) => Promise<boolean>
  create: (streamerName: string, userName: string, card: Card) => Promise<void>
}
