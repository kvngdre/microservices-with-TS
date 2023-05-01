import { Service } from 'typedi'

import User from '../model/user.model'
import IUserRequest from '../dto/userRequest.dto'
import { type IUserDoc } from '../interfaces/userModel.interface'

@Service()
class UserRepository {
  constructor(private readonly userModel: typeof User) {}

  public async addUser(newUserDto: IUserRequest): Promise<IUserDoc> {
    const newUser = new this.userModel(newUserDto)

    await newUser.save()

    return newUser
  }
}

export default UserRepository
