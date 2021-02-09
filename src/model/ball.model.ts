import { Schema, Document } from 'mongoose'

export interface IBallEntity extends Document {
  checked: boolean
  ballNumber: number
}

export const BallSchema = new Schema<IBallEntity>({
  checked: Boolean,
  ballNumber: Number,
})
