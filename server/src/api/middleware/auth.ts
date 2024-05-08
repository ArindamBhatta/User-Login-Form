import { Request, Response, NextFunction } from 'express'

export default (context: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    next()
  }
}
