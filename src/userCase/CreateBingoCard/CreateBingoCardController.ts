import { Request, Response } from 'express'

import { CreateBingoCardUseCase } from './CreateBingoCardUseCase'

export class CreateBingoCardController {
  constructor(private createBingoCardUseCase: CreateBingoCardUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const card = await this.createBingoCardUseCase.create()

    return response.status(201).json(card)
  }
}
