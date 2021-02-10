import mongoose, { Schema, Document } from 'mongoose'
import { ICardEntity } from './card.model'
import { BallSchema, IBallEntity } from './ball.model'

export interface IGameEntity extends Document {
  streamerName: string
  amountOfCards: number
  started: boolean
  ended: boolean
  cards: Array<ICardEntity['_id']>
  balls: Array<Omit<IBallEntity, keyof Document>>
}

export const GameSchema = new Schema<IGameEntity>({
  streamerName: String,
  amountOfCards: Number,
  started: Boolean,
  ended: Boolean,
  cards: [{ type: Schema.Types.ObjectId }],
  balls: [BallSchema],
})

const GameModel = mongoose.model<IGameEntity>('Game', GameSchema)

export default GameModel
