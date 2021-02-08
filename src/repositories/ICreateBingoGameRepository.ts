import { Game } from '../entities/Game'

export interface ICreateBingoGameRepository {
  streamerHasValidGame: (streamerName: string) => Promise<boolean>
  createGame: (streamerName: string) => Promise<Game>
}
