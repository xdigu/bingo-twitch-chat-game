import mongoose, { Document, Schema } from 'mongoose'

import { IGameEntity } from './game.model'

export interface ICardEntity extends Document {
  cardNumbers: number[]
  userChatName: string
  gameId: IGameEntity['_id']
}

const CardSchema = new Schema<ICardEntity>({
  userChatName: String,
  cardNumbers: [Number],
  gameId: { type: Schema.Types.ObjectId },
})

const cardModel = mongoose.model<ICardEntity>('Card', CardSchema)

export default cardModel
