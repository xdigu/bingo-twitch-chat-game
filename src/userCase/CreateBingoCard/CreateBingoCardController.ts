import { Request, Response } from 'express'

import { ICreateBingoCardRequestDTO, CreateBingoCardRequestDTOValidate } from './CreateBingoCardDTO'
import { CreateBingoCardUseCase } from './CreateBingoCardUseCase'

export class CreateBingoCardController {
  constructor(private createBingoCardUseCase: CreateBingoCardUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const body: ICreateBingoCardRequestDTO = request.body

    try {
      const { value, error } = CreateBingoCardRequestDTOValidate.validate(body)

      if (error) {
        throw new Error(`The sended body is not correct. ${error.message}`)
      }

      const { streamerName, userName } = value

      const card = await this.createBingoCardUseCase.create({ streamerName, userName })

      return response.status(201).json(card)
    } catch (err) {
      return response.status(404).json({ message: err.message })
    }
  }
}
