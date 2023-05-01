import { Service } from 'typedi'
import UserRepository from '../repository/user.repository'
import IUserRequest from '../dto/userRequest.dto'
import IUserResponse from '../dto/userResponse.dto'

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
