import { Router } from 'express';
import {
  ProductCreateSchema,
  ProductFilterSchema,
  ProductGetAllSchema,
  ProductUpdateSchema,
} from './product.schema';
import validateInput from '../../api/middlewares/validate.middleware';
import { asyncHandler } from '../../api/middlewares/error.middleware';
import { container } from 'tsyringe';
import ProductController from './product.controller';

const productRouter = Router();
const productPrefix = '/products';
const productController = container.resolve(ProductController);

productRouter.post(
  `${productPrefix}`,
  validateInput(ProductCreateSchema, 'body'),
  asyncHandler(productController.create.bind(productController)),
);

productRouter.get(
  `${productPrefix}/all`,
  validateInput(ProductGetAllSchema, 'query'),
  asyncHandler(productController.getAll.bind(productController)),
);
productRouter.get(
  `${productPrefix}`,
  validateInput(ProductFilterSchema, 'query'),
  asyncHandler(productController.getPagination.bind(productController)),
);
productRouter.get(
  `${productPrefix}/:productId`,
  asyncHandler(productController.getById.bind(productController)),
);

productRouter.put(
  `${productPrefix}/:productId`,
  validateInput(ProductUpdateSchema, 'body'),
  asyncHandler(productController.update.bind(productController)),
);

productRouter.delete(
  `${productPrefix}/:productId`,
  asyncHandler(productController.delete.bind(productController)),
);

export default productRouter;
