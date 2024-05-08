import { HttpMethod } from '../constants'
import { alertController, userController } from './controllers'

export default {
  [HttpMethod.GET]: {
    'fetch-alerts': alertController.getAlerts
    // 'fetch-notifications': notificationController.getEvents
  },

  [HttpMethod.POST]: {
    'create-alerts': alertController.createAlert,
    'login-or-signup': userController.loginOrSignup
  },
  [HttpMethod.PATCH]: {
    'update-alerts': alertController.updateAlert
    // 'fetch-notifications': notificationController.getEvents
  }
}
