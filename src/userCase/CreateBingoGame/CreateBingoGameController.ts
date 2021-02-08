import { Request, Response } from 'express'
import { ICreateBingoGameRequestDTO } from './CreateBingoGameDTO'
import { CreateBingoGameUseCase } from './CreateBingoGameUseCase'

export class CreateBingoGameController {
  constructor(private createBingoGameUseCase: CreateBingoGameUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { streamerName }: ICreateBingoGameRequestDTO = request.body

    try {
      const game = await this.createBingoGameUseCase.create(streamerName)

      return response.status(201).json(game)
    } catch (error) {
      return response.status(500).json({ message: error?.message ?? 'An error occured' })
    }
  }
}
