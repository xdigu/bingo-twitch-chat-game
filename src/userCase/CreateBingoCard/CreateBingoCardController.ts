import { Request, Response } from 'express'

import { ICreateBingoCardRequestDTO } from './CreateBingoCardDTO'
import { CreateBingoCardUseCase } from './CreateBingoCardUseCase'

export class CreateBingoCardController {
  constructor(private createBingoCardUseCase: CreateBingoCardUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { streamerName, userName }: ICreateBingoCardRequestDTO = request.body

    try {
      const card = await this.createBingoCardUseCase.create({ streamerName, userName })

      return response.status(201).json(card)
    } catch (err) {
      return response.status(404).json({ message: err.message })
    }
  }
}
