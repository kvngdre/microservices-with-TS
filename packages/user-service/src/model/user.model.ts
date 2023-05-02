import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'

import { type IUserInstanceMethods } from '../interfaces/userModel.interface'
import type IUserModel from '../interfaces/userModel.interface'
import type IUserRequest from '../dto/userRequest.dto'


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

userSchema.static('isUsernameTaken', async function (username: string): Promise<boolean> {
  return await this.findOne({ username }) !== null
})

userSchema.pre('save', function (next): void {
  if (this.modifiedPaths()?.includes('password')) {
    this.password = bcrypt.hashSync(this.password, 12)
  }
  
  next()
})

const User = model<IUserRequest, IUserModel>('User', userSchema)

export default User
