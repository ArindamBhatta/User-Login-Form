export default interface IUserService {
  createUser: (payload: ICreateUserServiceParams) => any
  getUser: (payload: IGetUserServiceParams) => any
  loginOrSignup: (payload: ILoginOrSignupServiceParams) => any
}

export interface ICreateUserServiceParams {
  email: string
}

export interface IGetUserServiceParams {
  email: string
}

export interface ILoginOrSignupServiceParams {
  email: string
}
