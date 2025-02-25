import { NextFunction, Request, Response } from 'express';
import { container, singleton } from 'tsyringe';
import { ProductService } from './product.service';
import ApiResponse from '../../utils/api-response';

@singleton()
export default class ProductController {
  private readonly productService = container.resolve(ProductService);
  async create(req: Request, res: Response, next: NextFunction) {
    const result = await this.productService.create(req.body);
    res.status(200).json(
      new ApiResponse({
        data: result,
        message: 'Success',
      }),
    );
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    const result = await this.productService.delete(req.params.productId);
    res.status(200).json(
      new ApiResponse({
        data: result,
        message: 'Success',
      }),
    );
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    const result = await this.productService.getById(req.params.productId);
    res.status(200).json(
      new ApiResponse({
        data: result,
        message: 'Success',
      }),
    );
  }
  async getAll(req: Request, res: Response, next: NextFunction) {
    const result = await this.productService.getAll();
    res.status(200).json(
      new ApiResponse({
        data: result,
        message: 'Success',
      }),
    );
  }
  async getPagination(req: Request, res: Response, next: NextFunction) {
    const result = await this.productService.getPagination(req.query);
    res.status(200).json(
      new ApiResponse({
        data: result,
        message: 'Success',
      }),
    );
  }

  async update(req: Request, res: Response, next: NextFunction) {
    const result = await this.productService.update({
      ...req.body,
      id: req.params.productId,
    });

    res.status(200).json(
      new ApiResponse({
        data: result,
        message: 'Success',
      }),
    );
  }
}
