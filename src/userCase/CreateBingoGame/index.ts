import { CreateBingoGameUseCase } from './CreateBingoGameUseCase'
import { CreateBingoGameController } from './CreateBingoGameController'
import { createBingoGameRepository } from '../../repositories/implementations/CreateBingoGameRepository'

const createBingoGameUseCase = new CreateBingoGameUseCase(createBingoGameRepository)
const createBingoGameController = new CreateBingoGameController(createBingoGameUseCase)

export { createBingoGameUseCase, createBingoGameController }
