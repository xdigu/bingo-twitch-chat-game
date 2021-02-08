import { CreateBingoCardUseCase } from './CreateBingoCardUseCase'
import { CreateBingoCardController } from './CreateBingoCardController'
import { CreateBingoCardRepository } from '../../repositories/implementations/CreateBingoCardRepository'
import { CreateBingoGameRepository } from '../../repositories/implementations/CreateBingoGameRepository'

const createBingoCardRepository = new CreateBingoCardRepository()
const createBingoGameRepository = new CreateBingoGameRepository()

const createBingoCardUseCase = new CreateBingoCardUseCase(createBingoCardRepository, createBingoGameRepository)
const createBingoCardController = new CreateBingoCardController(createBingoCardUseCase)

export { createBingoCardUseCase, createBingoCardController }
