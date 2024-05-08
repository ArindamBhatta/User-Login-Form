import { Alert } from 'src/api/entities'
import AlertRepo from '../../repos/AlertRepo/AlertRepo'
import IAlertService, { IGetAlertsServiceParams } from './AlertService.interface'

export default class AlertService implements IAlertService {
  private alertRepo: AlertRepo
  constructor(alertRepo: AlertRepo) {
    this.alertRepo = alertRepo
  }

  async createAlert(payload: Alert) {
    // side effects - notification, tracking
    // business logic
    // return await this.eventRepo.createEvent({ name, startDateTime, endDateTime, userId });
    return this.alertRepo.createAlert(payload)
  }

  async updateAlert(payload: Alert, id :string) {
    return this.alertRepo.updateAlert(payload,id)
  }

  async getAlerts(payload: IGetAlertsServiceParams) {
    // return await this.eventRepo.getEventsByDateRange({ startDateTime: isoStartDateTime, endDateTime: isoEndDateTime, userId });
    return this.alertRepo.getAlertsByUserId(payload)
  }
}
