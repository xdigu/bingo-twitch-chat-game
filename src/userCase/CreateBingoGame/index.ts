import { CreateBingoGameUseCase } from './CreateBingoGameUseCase'
import { CreateBingoGameController } from './CreateBingoGameController'
import { CreateBingoGameRepository } from '../../repositories/implementations/CreateBingoGameRepository'
import GameModel from '../../model/game.model'

const createBingoGameRepository = new CreateBingoGameRepository(GameModel)

const createBingoGameUseCase = new CreateBingoGameUseCase(createBingoGameRepository)
const createBingoGameController = new CreateBingoGameController(createBingoGameUseCase)

export { createBingoGameUseCase, createBingoGameController }
