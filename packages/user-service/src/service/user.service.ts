import { Service } from 'typedi'

import type IUserRequest from '../dto/userRequest.dto'
import type IUserResponse from '../dto/userResponse.dto'
import UserRepository from '../repository/user.repository'

@Service()
class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async addUser(newUserDto: IUserRequest): Promise<IUserResponse> {
    const userDoc = await this.userRepository.addUser(newUserDto)

    return { id: userDoc._id.toString() }
  }

  public async getAllUsers(): Promise<IUserResponse[]> {
    return await this.userRepository.getAllUsers({ password: false })
  }
}

export default UserService
