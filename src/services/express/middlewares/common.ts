import { badRequestError, bodyRequiredError, routeNotFoundError } from '../../../consts'
import { Request, Response, NextFunction } from 'express'

export function routeNotFound(req: Request, res: Response, next: NextFunction) {
  if (!req.route) {
    res.status(404).send(routeNotFoundError)
    return next()
  } else return next()
}

export function bodyRequired(req: Request, res: Response, next: NextFunction) {
  if (!req.body || typeof req.body !== 'object' || Object.keys(req.body).length === 0) {
    res.status(422).send(bodyRequiredError)
  } else return next()
}

export function clientErrorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  console.log('err 2 @ express mid::', err)
  if (req.xhr) {
    res.status(badRequestError.status).send(badRequestError)
  } else {
    next(err)
  }
}

export function errorHandler(err: Error | any, _req: Request, res: Response, next: NextFunction) {
  console.log('err 3 @ express mid::', err)
  if (res.headersSent) {
    return next()
  } else res.status(err.status ? err.status : 400).send(err)
}
