import { Request, Response } from 'express'

export enum HttpMethod {
  POST = 'post',
  GET = 'get',
  PATCH = 'patch'
}

export enum ApiVersion {
  V1 = 'v1',
  V2 = 'v2'
}

export interface ControllerPayload {
  req: Request
  res: Response
}
