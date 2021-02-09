import { Card } from '../entities/Card'
import { ICardEntity } from '../model/card.model'

export interface ICreateBingoCardRepository {
  chatUserHasCard: (gameId: string, userName: string) => Promise<ICardEntity | null>
  create: (streamerName: string, userName: string, card: Card) => Promise<ICardEntity | null>
}
