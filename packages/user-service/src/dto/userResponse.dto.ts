import { ObjectId } from 'mongoose'
import IUserRequest from './userRequest.dto'

type IUserResponse = { id: string } | Omit<IUserRequest, 'password'>

export default IUserResponse
