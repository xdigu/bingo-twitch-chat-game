import { ICreateBingoCardRepository } from '../ICreateBingoCardRepository'

import type { Card } from '../../entities/Card'

interface Game {
  streamerName: string
  valid: boolean
}

interface Cards {
  streamerName: string
  userName: string
  card: Card
}

export class CreateBingoCardRepository implements ICreateBingoCardRepository {
  #cards: Cards[] = []
  #games: Game[] = [{ streamerName: 'xdigu', valid: true }]

  async streamerHasValidGame(streamerName: string): Promise<boolean> {
    const validGame = this.#games.find((game) => game.streamerName === streamerName && game.valid)

    return !!validGame
  }

  async chatUserHasCard(streamerName: string, userChatName: string): Promise<boolean> {
    const validCard = this.#cards.find((card) => card.streamerName === streamerName && card.userName === userChatName)

    return !!validCard
  }

  async create(streamerName: string, userName: string, card: Card): Promise<void> {
    this.#cards.push({ streamerName, userName, card })
  }
}
