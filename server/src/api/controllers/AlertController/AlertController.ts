import { ControllerPayload } from '../../../constants'
import AlertService from '../../services/AlertService/AlertService'
import IAlertController from './AlertController.interface'

export default class AlertController implements IAlertController {
  private alertService: AlertService
  constructor(alertService: AlertService) {
    this.alertService = alertService
  }

  createAlert = async (payload: ControllerPayload) => {
    const data = payload.req.body
    try {
      return await this.alertService.createAlert(data)
    } catch (err) {
      console.log({ err })
    }
  }

  updateAlert = async (payload: ControllerPayload) => {
    const data = payload.req.body
    const id = payload.req.params.id;
    try {
      return await this.alertService.updateAlert(data, id)
    } catch (err) {
      console.log({ err })
    }
  }

  getAlerts = async (payload: ControllerPayload) => {
    const userId = payload.req.params.userId
    try {
      return await this.alertService.getAlerts(userId)
    } catch (err) {
      console.log(err)
    }
  }
}
