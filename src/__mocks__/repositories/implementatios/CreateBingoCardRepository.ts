import { ICreateBingoCardRepository } from '../../../repositories/ICreateBingoCardRepository'

import type { Card } from '../../../entities/Card'

interface Cards {
  streamerName: string
  userName: string
  card: Card
}

class CreateBingoCardRepository implements ICreateBingoCardRepository {
  #cards: Cards[] = []

  async chatUserHasCard(streamerName: string, userChatName: string): Promise<boolean> {
    const validCard = this.#cards.find((card) => card.streamerName === streamerName && card.userName === userChatName)

    return !!validCard
  }

  async create(streamerName: string, userName: string, card: Card): Promise<void> {
    this.#cards.push({ streamerName, userName, card })
  }
}

export const createBingoCardRepository = new CreateBingoCardRepository()
