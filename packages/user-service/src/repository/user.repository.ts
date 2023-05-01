import Container, { Service } from 'typedi'

import User from '../model/user.model'
import type IUserRequest from '../dto/userRequest.dto'
import type IUserModel from '../interfaces/userModel.interface'
import { type IUserDoc } from '../interfaces/userModel.interface'

Container.set('userModel', User)
@Service()
class UserRepository {
  private readonly userModel: IUserModel

  constructor() {
    this.userModel = Container.get('userModel')
  }

  public async addUser(newUserDto: IUserRequest): Promise<IUserDoc> {
    const newUser = new this.userModel(newUserDto)

    await newUser.save()

    return newUser
  }
}

export default UserRepository
