import { HydratedDocument, Model } from 'mongoose'
import IUserRequest from '../dto/userRequest.dto'

interface DocumentResult<T> {
  _doc: T
}

export type IUserDoc = HydratedDocument<IUserRequest, IUserInstanceMethods> &
  DocumentResult<HydratedDocument<IUserRequest>>

export interface IUserInstanceMethods {
  omitPassword(): void
}

export default interface IUserModel
  extends Model<IUserDoc, object, IUserInstanceMethods> {
  isUsernameTaken(username: string): boolean
}
