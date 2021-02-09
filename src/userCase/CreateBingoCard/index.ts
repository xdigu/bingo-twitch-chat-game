import { CreateBingoCardUseCase } from './CreateBingoCardUseCase'
import { CreateBingoCardController } from './CreateBingoCardController'
import { CreateBingoCardRepository } from '../../repositories/implementations/CreateBingoCardRepository'
import { CreateBingoGameRepository } from '../../repositories/implementations/CreateBingoGameRepository'
import GameModel from '../../model/game.model'
import CardModel from '../../model/card.model'

const createBingoCardRepository = new CreateBingoCardRepository(CardModel)
const createBingoGameRepository = new CreateBingoGameRepository(GameModel)

const createBingoCardUseCase = new CreateBingoCardUseCase(createBingoCardRepository, createBingoGameRepository)
const createBingoCardController = new CreateBingoCardController(createBingoCardUseCase)

export { createBingoCardUseCase, createBingoCardController }
