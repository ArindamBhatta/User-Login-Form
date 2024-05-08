import UserRepo from 'src/api/repos/UserRepo/UserRepo'
import IUserService, {
  ICreateUserServiceParams,
  IGetUserServiceParams,
  ILoginOrSignupServiceParams
} from './UserService.interface'
import { User } from '../../entities/index'

export default class UserService implements IUserService {
  private userRepo: UserRepo
  constructor(userRepo: UserRepo) {
    this.userRepo = userRepo
  }

  createUser = async (payload: ICreateUserServiceParams) => {
    const user = new User({ email: payload.email })

    return this.userRepo.createUser({ user })
  }

  getUser = async (payload: IGetUserServiceParams) => {
    // return await this.eventRepo.getEventsByDateRange({ startDateTime: isoStartDateTime, endDateTime: isoEndDateTime, userId });
    return this.userRepo.getUser(payload)
  }

  loginOrSignup = async (payload: ILoginOrSignupServiceParams) => {
    try {
      const user = await this.getUser({ email: payload.email })
      if (user?.id) {
        console.log('login successful')
        return this.userRepo.entityToDeliveryModel(user)
      } else {
        console.log('user doesnt exist')
        const newUser = await this.createUser({ email: payload.email })
        return this.userRepo.entityToDeliveryModel(newUser)
      }
    } catch (err) {
      console.log(err)
    }
  }
}
