import { ICreateBingoCardRepository } from '../../repositories/ICreateBingoCardRepository'
import { ICreateBingoCardRequestDTO } from './CreateBingoCardDTO'
import { Card } from '../../entities/Card'

export class CreateBingoCardUseCase {
  constructor(private createBingoCardRepository: ICreateBingoCardRepository) {}

  async create(
    data: ICreateBingoCardRequestDTO,
  ): Promise<Omit<Card, 'avaliableCardNumbers' | 'createDefaultCardColumn' | 'createCardColumn'>> {
    const { streamerName, userName } = data

    const card = new Card()

    const hasGame = await this.createBingoCardRepository.streamerHasValidGame(streamerName)

    if (!hasGame) {
      throw new Error('Streamer has no game initiated')
    }

    const userHasCard = await this.createBingoCardRepository.chatUserHasCard(streamerName, userName)

    if (userHasCard) {
      throw new Error('User already have a card')
    }

    await this.createBingoCardRepository.create(streamerName, userName, card)

    return card
  }
}
