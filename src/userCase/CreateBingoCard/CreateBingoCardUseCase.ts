import { ICardRepository } from '../../repositories/ICardRepository'
import { Card } from '../../entities/Card'

export class CreateBingoCardUseCase {
  constructor(private bingoCardRepository: ICardRepository) {}

  async create(): Promise<Card> {
    const card = new Card()

    await this.bingoCardRepository.create(card)

    return card
  }
}
