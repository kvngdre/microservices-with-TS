import { Router } from 'express'
import UserController from '../controller/user.controller'

const userController = new UserController()

export default function getUserRoutes(): Router {
  const router = Router()

  router.get('/', userController.getUsers)

  return router
}
