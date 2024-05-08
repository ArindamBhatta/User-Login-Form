export default interface IAlertService {
  createAlert: (payload: ICreateAlertServiceParams) => any
  getAlerts: (payload: IGetAlertsServiceParams) => any
}

export interface ICreateAlertServiceParams {}

export interface IGetAlertsServiceParams {}
