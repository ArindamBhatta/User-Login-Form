import UserService from 'src/api/services/UserService/UserService'
import { ControllerPayload } from '../../../constants'
import IUserController from './UserController.interface'

export default class UserController implements IUserController {
  private userService: UserService
  constructor(userService: UserService) {
    this.userService = userService
  }

  createUser = async (payload: ControllerPayload) => {
    const data = payload.req.body //controllerPaylode object ar req hlo akta key
    try {
      return await this.userService.createUser(data)
    } catch (err) {
      console.log({ err })
    }
  }

  getUser = async (payload: ControllerPayload) => {
    const email = payload.req.params.email
    try {
      return await this.userService.getUser({ email })
    } catch (err) {
      console.log(err)
    }
  }

  loginOrSignup = async (payload: ControllerPayload) => {
    const email = payload.req.body.email
    console.log('controller::loginOrSignup', typeof this.userService.loginOrSignup)
    try {
      const user = await this.userService.loginOrSignup({ email })
      return user
    } catch (err) {
      console.log(err)
    }
  }
}
