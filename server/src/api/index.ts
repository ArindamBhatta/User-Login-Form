import express, { Request, Response, IRouter } from 'express'
import { HttpMethod, ApiVersion } from '../constants'
import { auth } from './middleware'
import route from './route'

const router = express.Router()

export default (): IRouter => {
  const mwCtxForPost = {}
  const mwCtxForGet = {}

  const postMWs = [auth].map((fn) => fn(mwCtxForPost))
  const getMWs = [auth].map((fn) => fn(mwCtxForGet))

  const callService = async (method: HttpMethod, req: Request, res: Response) => {
    const apiVersion = req.params.apiversion || ApiVersion.V1 //Default version is v1.0
    const serviceName = req.params.service
    console.log('callService', { method, serviceName })
    let serviceDef

    switch (apiVersion) {
      case ApiVersion.V1:
        serviceDef = route[method][serviceName]
        break
      case ApiVersion.V2:
        serviceDef = route[method][serviceName]
        break
      default:
    }

    if (!serviceDef) {
      serviceDef = () => 'Service not found'
    }

    try {
      const resp = await serviceDef({ req, res })
      res.send(resp)
    } catch (err) {
      console.log(err)
    }
  }

  router.get('/:apiversion/:service/:userId', ...getMWs, async (req: Request, res: Response) => {
    callService(HttpMethod.GET, req, res)
  })

  router.post('/:apiversion/:service', ...postMWs, async (req: Request, res: Response) => {
    callService(HttpMethod.POST, req, res)
  })

  router.patch('/:apiversion/:service/:id', ...getMWs, async (req: Request, res: Response) => {
    callService(HttpMethod.PATCH, req, res)
  })

  return router
}
