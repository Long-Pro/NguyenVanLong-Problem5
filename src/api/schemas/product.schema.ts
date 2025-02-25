import Joi from 'joi'
import { GetAllSchema, GetOneSchema, GetSchema } from './common.schema'

export const ProductCreateSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  attributes: Joi.array()
    .items(
      Joi.object({
        key: Joi.string().required(),
        value: Joi.any().required(),
      })
    )
    .required(),
})
export const ProductUpdateSchema = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
  price: Joi.number(),
  attributes: Joi.array().items(
    Joi.object({
      key: Joi.string().required(),
      value: Joi.any().required(),
    })
  ),
})

export const ProductGetAllSchema = GetAllSchema.append({
  'filter.name': Joi.string(),
})
