import { ICreateBingoCardRepository } from '../../repositories/ICreateBingoCardRepository'
import { ICreateBingoCardRequestDTO } from './CreateBingoCardDTO'
import { Card } from '../../entities/Card'
import { ICreateBingoGameRepository } from '../../repositories/ICreateBingoGameRepository'

export class CreateBingoCardUseCase {
  constructor(
    private createBingoCardRepository: ICreateBingoCardRepository,
    private createBingoGameRepository: ICreateBingoGameRepository,
  ) {}

  async create(
    data: ICreateBingoCardRequestDTO,
  ): Promise<Omit<Card, 'avaliableCardNumbers' | 'createDefaultCardColumn' | 'createCardColumn'>> {
    const { streamerName, userName } = data

    const game = await this.createBingoGameRepository.streamerHasValidGame(streamerName)

    if (!game) {
      throw new Error('Streamer has no game initiated.')
    }

    const userHasCard = await this.createBingoCardRepository.chatUserHasCard(game._id, userName)

    if (game.amountOfCards > game.cards.length) {
      throw new Error('There is no card to be distributed.')
    }

    if (userHasCard) {
      throw new Error('User already have a card.')
    }

    const card = new Card(userName, game._id)

    const _card = await this.createBingoCardRepository.create(streamerName, userName, card)

    game.cards.push(_card?.id)

    await game.save()

    return card
  }
}
