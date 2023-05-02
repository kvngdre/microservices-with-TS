import { type Request, type Response } from 'express'
import { Service } from 'typedi'

import type IUserRequest from '../dto/userRequest.dto'
import HttpCodes from '../utils/HttpStatusCodes'
import UserService from '../service/user.service'

@Service()
class UserController {
  constructor(private readonly userService: UserService) {}

  addUser = async (req: Request, res: Response): Promise<void> => {
    const newUserDto: IUserRequest = req.body
    const newUser = await this.userService.addUser(newUserDto)

    res.status(HttpCodes.CREATED).json(newUser)
  }

  getAllUsers = async (req: Request, res: Response): Promise<void> => {
    const foundUsers = await this.userService.getAllUsers()

    res.status(HttpCodes.OK).json({ message: 'Fetched users', data: foundUsers })
  }
}

export default UserController
