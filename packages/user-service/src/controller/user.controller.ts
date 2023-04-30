import { type Request, type Response } from 'express'
import HttpCodes from '../utils/HttpStatusCodes'
import { Service } from 'typedi'
import UserService from '../service/user.service'
import IUserRequest from '../dto/userRequest.dto'
import IUserResponse from '../dto/userResponse.dto'

@Service()
export default class UserController {
  constructor(private readonly userService: UserService) {}

  addUser = async (req: Request, res: Response): Promise<void> => {
    const newUserDto: IUserRequest = req.body

    const newUser: IUserResponse = await this.userService.addUser(newUserDto)

    res.status(HttpCodes.CREATED).json(newUser)
  }

  getUsers(req: Request, res: Response): void {
    res.status(HttpCodes.OK).json({ message: 'user service is running' })
  }
}
