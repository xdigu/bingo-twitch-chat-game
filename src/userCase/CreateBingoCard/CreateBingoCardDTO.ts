import joi from 'joi'

export interface ICreateBingoCardRequestDTO {
  streamerName: string
  userName: string
}

export const CreateBingoCardRequestDTOValidate = joi.object<ICreateBingoCardRequestDTO>({
  streamerName: joi.string().required(),
  userName: joi.string().required(),
})
