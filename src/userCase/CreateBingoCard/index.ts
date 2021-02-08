import { CreateBingoCardUseCase } from './CreateBingoCardUseCase'
import { CreateBingoCardController } from './CreateBingoCardController'
import { createBingoCardRepository } from '../../repositories/implementations/CreateBingoCardRepository'
import { createBingoGameRepository } from '../../repositories/implementations/CreateBingoGameRepository'

const createBingoCardUseCase = new CreateBingoCardUseCase(createBingoCardRepository, createBingoGameRepository)
const createBingoCardController = new CreateBingoCardController(createBingoCardUseCase)

export { createBingoCardUseCase, createBingoCardController }
