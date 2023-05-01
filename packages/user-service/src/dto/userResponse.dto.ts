import { type HydratedDocument } from 'mongoose'
import { type IUserInstanceMethods } from '../interfaces/userModel.interface'
import IUserRequest from './userRequest.dto'

type IUserResponse = { _id: any } & Omit<IUserRequest, 'password'>

export default IUserResponse
