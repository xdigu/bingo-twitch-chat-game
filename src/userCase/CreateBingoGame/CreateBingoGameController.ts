import { Request, Response } from 'express'
import { ICreateBingoGameRequestDTO, createBingoGameRequestDTOValidation } from './CreateBingoGameDTO'
import { CreateBingoGameUseCase } from './CreateBingoGameUseCase'

export class CreateBingoGameController {
  constructor(private createBingoGameUseCase: CreateBingoGameUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const body: ICreateBingoGameRequestDTO = request.body

    try {
      const { value, error } = createBingoGameRequestDTOValidation.validate(body)

      if (error) {
        throw new Error(`The sended body is not correct. ${error.message}`)
      }

      const { streamerName, amountOfCards } = value

      const game = await this.createBingoGameUseCase.create(streamerName, amountOfCards)

      return response.status(201).json(game)
    } catch (error) {
      return response.status(500).json({ message: error?.message ?? 'An error occured' })
    }
  }
}
