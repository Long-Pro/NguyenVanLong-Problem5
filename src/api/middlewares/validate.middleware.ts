import Joi from 'joi'
import { NextFunction, Request, RequestHandler, Response } from 'express'

export default function validateInput(
  schema: Joi.Schema,
  select: 'body' | 'query'
): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req[select])
    if (error) return next(error)
    req[select] = value
    next()
  }
}
