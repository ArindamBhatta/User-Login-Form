import { User } from 'src/api/entities'

export default interface IUserRepo {
  createUser: (payload: ICreateUserRepoParams) => any
  getUser: (payload: IGetUserRepoParams) => any
}

export interface ICreateUserRepoParams {
  user: User
}

export interface IGetUserRepoParams {
  email: string
}
