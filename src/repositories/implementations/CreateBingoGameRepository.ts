import { Model } from 'mongoose'
import { Game } from '../../entities/Game'
import { IGameEntity } from '../../model/game.model'
import { ICreateBingoGameRepository } from '../ICreateBingoGameRepository'

export class CreateBingoGameRepository implements ICreateBingoGameRepository {
  #games: Game[] = []

  constructor(private gameDataBase: Model<IGameEntity>) {}

  async streamerHasValidGame(streamerName: string): Promise<IGameEntity | null> {
    const game = await this.gameDataBase.findOne({ streamerName, started: false, ended: false })

    return game
  }

  async createGame(streamerName: string): Promise<IGameEntity | null> {
    const game = new Game(streamerName)

    const _game = this.gameDataBase.create(game)

    return _game
  }
}
