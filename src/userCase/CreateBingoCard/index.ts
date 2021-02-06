import { CreateBingoCardController } from './CreateBingoCardController'
import { CreateBingoCardUseCase } from './CreateBingoCardUseCase'
import { CreateBingoCardRepository } from '../../repositories/implementations/CreateBingoCardRepository'

const createBingoCardRepository = new CreateBingoCardRepository()
const createBingoCardUseCase = new CreateBingoCardUseCase(createBingoCardRepository)
const createBingoCardController = new CreateBingoCardController(createBingoCardUseCase)

export { createBingoCardUseCase, createBingoCardController }
