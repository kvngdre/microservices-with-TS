import { type Request, type Response } from 'express'
import { Service } from 'typedi'

import type IUserRequest from '../dto/userRequest.dto'
import HttpCodes from '../utils/HttpStatusCodes'
import UserService from '../service/user.service'
import APIResponse from '../utils/APIResponse'

@Service()
class UserController {
  constructor(private readonly userService: UserService) {}

  addUser = async (req: Request, res: Response): Promise<void> => {
    const newUserDto: IUserRequest = req.body
    const newUser = await this.userService.addUser(newUserDto)

    res.status(HttpCodes.CREATED).json(new APIResponse('User Created', newUser))
  }

  getAllUsers = async (req: Request, res: Response): Promise<void> => {
    const foundUsers = await this.userService.getAllUsers()

    res.status(HttpCodes.OK).json(new APIResponse('Fetched Users', foundUsers))
  }
}

export default UserController
