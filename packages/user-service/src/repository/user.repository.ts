import { type IUserDoc } from '../interfaces/userModel.interface'
import { Inject, Service } from 'typedi'
import User from '../model/user.model'
import IUserRequest from '../dto/userRequest.dto'

@Service()
class UserRepository {
  constructor(private userModel: typeof User) {}

  public addUser = async (newUserDto: IUserRequest): Promise<IUserDoc> => {
    const newUser: IUserDoc = new this.userModel(newUserDto)

    await newUser.save()

    return newUser
  }
}

export default UserRepository
