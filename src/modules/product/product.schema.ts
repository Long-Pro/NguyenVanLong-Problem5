import Joi from 'joi';

export const ProductCreateSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
});
export const ProductUpdateSchema = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
  price: Joi.number(),
});

export const ProductGetAllSchema = Joi.object({
  name: Joi.string(),
});

export const ProductFilterSchema = ProductGetAllSchema.append({
  size: Joi.number().default(10),
  page: Joi.number().default(1),
});
