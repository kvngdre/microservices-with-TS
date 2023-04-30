import { type HydratedDocument } from 'mongoose'
import { type IUserInstanceMethods } from '../interfaces/userModel.interface'
import IUserRequest from './userRequest.dto'

type IUserResponse = Omit<HydratedDocument<IUserRequest, IUserInstanceMethods>, 'password'>

export default IUserResponse
