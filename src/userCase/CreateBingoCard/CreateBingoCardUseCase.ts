import { ICreateBingoCardRepository } from '../../repositories/ICreateBingoCardRepository'
import { Card } from '../../entities/Card'

export class CreateBingoCardUseCase {
  constructor(private createBingoCardRepository: ICreateBingoCardRepository) {}

  async create(): Promise<Card> {
    const card = new Card()

    await this.createBingoCardRepository.create(card)

    return card
  }
}
