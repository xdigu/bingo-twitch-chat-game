import joi from 'joi'

export interface ICreateBingoGameRequestDTO {
  streamerName: string
  amountOfCards: number
}

export const createBingoGameRequestDTOValidation = joi.object<ICreateBingoGameRequestDTO>({
  amountOfCards: joi.number().required(),
  streamerName: joi.string().required(),
})
