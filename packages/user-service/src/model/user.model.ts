import {  type SchemaOptions, type Document, Schema, model } from 'mongoose'
import IUserModel, { IUserInstanceMethods } from '../interfaces/userModel.interface'
import { Container } from 'typedi'
import IUserRequest from '../dto/userRequest.dto'

const userSchema = new Schema<IUserRequest, IUserModel, IUserInstanceMethods>({
  username: {
    type: String,
    required: true,
    unique: true,
    idex: true,
    maxLength: 50
  },

  password: {
    type: String,
    required: true,
    maxLength: 1024
  }

},  { timestamps: true })

userSchema.methods.omitPassword = function(): void {
  delete this._doc.password
}

const User = model<IUserRequest, IUserModel>('User', userSchema)

Container.set('UserModel', User)

export default User
