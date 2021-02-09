import { IGameEntity } from '../model/game.model'

export interface ICreateBingoGameRepository {
  streamerHasValidGame: (streamerName: string) => Promise<IGameEntity | null>
  createGame: (streamerName: string) => Promise<IGameEntity | null>
}
