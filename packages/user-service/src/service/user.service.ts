import { Service } from 'typedi'

import type IUserRequest from '../dto/userRequest.dto'
import type IUserResponse from '../dto/userResponse.dto'
import UserRepository from '../repository/user.repository'

@Service()
class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async addUser(newUserDto: IUserRequest): Promise<IUserResponse> {
    const newUser = await this.userRepository.addUser(newUserDto)
    newUser.omitPassword()

    return newUser
  }
}

export default UserService
