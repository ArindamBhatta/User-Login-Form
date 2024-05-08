import { alertService, userService } from '../services'
import AlertController from './AlertController/AlertController'
import UserController from './UserController/UserController'

const alertController = new AlertController(alertService)
const userController = new UserController(userService)

export { alertController, userController }
