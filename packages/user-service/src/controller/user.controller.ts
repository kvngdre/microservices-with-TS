import { type Request, type Response } from 'express'
import HttpCodes from '../interfaces/HttpStatusCodes'
import { Service } from 'typedi'

@Service()
export default class UserController {
  getUsers(req: Request, res: Response): void {
    res.status(HttpCodes.OK).json({ message: 'user service is running' })
  }
}
