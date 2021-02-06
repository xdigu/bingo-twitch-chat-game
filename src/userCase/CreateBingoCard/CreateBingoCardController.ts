import type { Request, Response } from 'express'

import { CreateBingoCardUseCase } from './CreateBingoCardUseCase'

export class CreateBingoCardController {
  constructor(private createBingoCardCase: CreateBingoCardUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const card = await this.createBingoCardCase.create()

    return response.status(201).json(card)
  }
}
