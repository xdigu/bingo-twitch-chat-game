import { Game } from '../../entities/Game'
import { ICreateBingoGameRepository } from '../ICreateBingoGameRepository'

export class CreateBingoGameRepository implements ICreateBingoGameRepository {
  #games: Game[] = []

  async streamerHasValidGame(streamerName: string): Promise<boolean> {
    const game = this.#games.find(
      (game) => game.streamerName === streamerName && game.started === false && game.ended === false,
    )

    console.log(this.#games)

    return !!game
  }

  async createGame(streamerName: string): Promise<Game> {
    const game = new Game(streamerName)

    this.#games.push(game)

    return game
  }
}
