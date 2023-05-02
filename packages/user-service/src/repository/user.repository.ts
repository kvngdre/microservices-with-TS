import { Container, Service } from 'typedi'
import { Error } from 'mongoose'

import { type IUserDoc } from '../interfaces/userModel.interface'
import type IUserRequest from '../dto/userRequest.dto'
import type UserProjection from '../types/userProjection'
import type IUserModel from '../interfaces/userModel.interface'
import { ConflictError, ValidationError } from '../errors'
import User from '../model/user.model'

Container.set('userModel', User)

@Service()
class UserRepository {
  private readonly userModel: IUserModel

  constructor() {
    this.userModel = Container.get('userModel')
  }
  
  private getDuplicateField(error: any): string {
    const field = Object.keys(error.keyPattern)[0]
    return field
      .charAt(0)
      .toUpperCase()
      .concat(field.slice(1))
      .replace('_', ' ')
  }

  private getValidationErrorMessage(error: Error.ValidationError): string {
    const field = Object.keys(error.errors)[0]
    return error.errors[field].message.replace('Path', '')
  }

  public async addUser(newUserDto: IUserRequest): Promise<IUserDoc> {
    try {
      const isTaken = await this.userModel.isUsernameTaken(newUserDto.username)
      if (isTaken) {
        throw new ConflictError({ message: 'Username has already been taken.' })
      }
    
      const newUser = new this.userModel(newUserDto)
      await newUser.save()

      return newUser
    } catch (exception: unknown) {
      if (exception instanceof Error && exception.message.includes('E11000')) {
        const field = this.getDuplicateField(exception)
        throw new ConflictError({ message: `${field} already in use.` })
      }

      if (exception instanceof Error.ValidationError) {
        const errorMsg = this.getValidationErrorMessage(exception)
        throw new ValidationError({ message: errorMsg })
      }

      throw exception
    }
  }

  async getAllUsers(projection: UserProjection = {}): Promise<IUserDoc[]> {
    const foundUsers = this.userModel.find().select(projection)

    return foundUsers
  }
}

export default UserRepository
