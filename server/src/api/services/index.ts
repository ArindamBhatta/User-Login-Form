import { alertRepo, userRepo } from '../repos'
import AlertService from './AlertService/AlertService'
import UserService from './UserService/UserService'

const alertService = new AlertService(alertRepo)
const userService = new UserService(userRepo)

export { alertService, userService }
