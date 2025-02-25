import Joi from 'joi'

export const GetOneSchema = Joi.object({
  select: Joi.string().default(''),
})

export const GetAllSchema = Joi.object({
  sort: Joi.string(),
  select: Joi.string().default(''),
})

export const GetSchema = GetAllSchema.append({
  limit: Joi.number().default(10),
  page: Joi.number().default(1),
})

export const SearchSchema = Joi.object({
  select: Joi.string().default(''),
  q: Joi.string().required(),
})
