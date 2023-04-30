import { Router } from 'express'
import { Container } from 'typedi'

import UserController from '../controller/user.controller'

// Requesting an instance of UserController from TypeDI
const userController: UserController = Container.get(UserController)

export default function getUserRoutes(): Router {
  const router = Router()

  router.get('/', userController.getUsers)

  return router
}
