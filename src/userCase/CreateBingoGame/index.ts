import { CreateBingoGameUseCase } from './CreateBingoGameUseCase'
import { CreateBingoGameController } from './CreateBingoGameController'
import { CreateBingoGameRepository } from '../../repositories/implementations/CreateBingoGameRepository'

const createBingoGameRepository = new CreateBingoGameRepository()
const createBingoGameUseCase = new CreateBingoGameUseCase(createBingoGameRepository)
const createBingoGameController = new CreateBingoGameController(createBingoGameUseCase)

export { createBingoGameUseCase, createBingoGameController }
