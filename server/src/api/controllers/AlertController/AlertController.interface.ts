import { ControllerPayload } from '../../../constants'

export default interface IAlertController {
  createAlert: (payload: ControllerPayload) => any
  getAlerts: (payload: ControllerPayload) => any
}
