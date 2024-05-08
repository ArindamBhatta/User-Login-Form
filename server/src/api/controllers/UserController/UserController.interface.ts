import { ControllerPayload } from '../../../constants'

export default interface IUserController {
  createUser: (payload: ControllerPayload) => any
  getUser: (payload: ControllerPayload) => any
  loginOrSignup: (payload: ControllerPayload) => any
}
