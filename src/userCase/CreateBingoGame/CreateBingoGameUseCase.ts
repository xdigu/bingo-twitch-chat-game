import { Game } from '../../entities/Game'
import { ICreateBingoGameRepository } from '../../repositories/ICreateBingoGameRepository'

export class CreateBingoGameUseCase {
  constructor(private createBingoGameRepository: ICreateBingoGameRepository) {}

  async create(streamerName: string, amountOfCards: number): Promise<Game> {
    const hasGame = await this.createBingoGameRepository.streamerHasValidGame(streamerName)

    if (hasGame) {
      throw new Error('Alreary exist a game.')
    }

    const game = new Game(streamerName, amountOfCards)

    await this.createBingoGameRepository.createGame(streamerName)

    return game
  }
}
