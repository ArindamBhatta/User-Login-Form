export default interface IAlertRepo {
  createAlert: (payload: ICreateAlertRepoParams) => any
  getAlertsByUserId: (payload: IGetAlertsByUserIdRepoParams) => any
}

export interface ICreateAlertRepoParams {}

export interface IGetAlertsByUserIdRepoParams {}
