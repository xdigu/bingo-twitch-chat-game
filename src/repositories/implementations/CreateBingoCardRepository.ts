import { ICreateBingoCardRepository } from '../ICreateBingoCardRepository'

import type { Card } from '../../entities/Card'
import { ICardEntity } from '../../model/card.model'
import { Model } from 'mongoose'

interface Cards {
  streamerName: string
  userName: string
  card: Card
}

export class CreateBingoCardRepository implements ICreateBingoCardRepository {
  constructor(private cardDataBase: Model<ICardEntity>) {}
  #cards: Cards[] = []

  async chatUserHasCard(gameId: string, userChatName: string): Promise<ICardEntity | null> {
    const validCard = await this.cardDataBase.findOne({ userChatName, gameId })

    return validCard
  }

  async create(streamerName: string, userName: string, card: Card): Promise<ICardEntity | null> {
    const _card = await this.cardDataBase.create(card)

    return _card
  }
}
