export class Card {
  columnB: number[]
  columnI: number[]
  columnN: number[]
  columnG: number[]
  columnO: number[]

  #avaliableCardNumbers: Omit<Card, 'avaliableCardNumbers' | 'createDefaultCardColumn' | 'createCardColumn'>

  constructor() {
    this.#avaliableCardNumbers = {
      columnB: this.createDefaultCardColumn(1),
      columnI: this.createDefaultCardColumn(2),
      columnN: this.createDefaultCardColumn(3),
      columnG: this.createDefaultCardColumn(4),
      columnO: this.createDefaultCardColumn(5),
    }

    this.columnB = this.createCardColumn(this.#avaliableCardNumbers.columnB)
    this.columnI = this.createCardColumn(this.#avaliableCardNumbers.columnI)
    this.columnN = this.createCardColumn(this.#avaliableCardNumbers.columnN)
    this.columnG = this.createCardColumn(this.#avaliableCardNumbers.columnG)
    this.columnO = this.createCardColumn(this.#avaliableCardNumbers.columnO)
  }

  private createDefaultCardColumn(columnNumber: number, totalBingoStone = 90): number[] {
    if (columnNumber < 1 || columnNumber > 5) {
      throw new Error('The column numer must be betwen 1 and 5')
    }

    const bingoStonePerColumn = totalBingoStone / 5

    const columnOffSet = columnNumber * bingoStonePerColumn - (bingoStonePerColumn - 1)

    return [...new Array(bingoStonePerColumn).fill(null).map((_, idx) => idx + columnOffSet)]
  }

  private createCardColumn(avaliableNumbers: number[], cardColumnOffSet = 5): number[] {
    if (!avaliableNumbers.length || avaliableNumbers.length < cardColumnOffSet) {
      throw new Error('Not enough numbers was given from avaliableNumbers')
    }

    const shufleNumbers = [...avaliableNumbers].sort(() => Math.random() - 0.5)

    const cardColumn = shufleNumbers.slice(0, cardColumnOffSet).sort((a, b) => a - b)

    return cardColumn
  }
}
