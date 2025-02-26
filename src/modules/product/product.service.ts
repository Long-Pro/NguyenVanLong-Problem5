import { container, singleton } from 'tsyringe';
import { Product } from './entities/product.entity';
import { ProductRepository } from './product.repository';
import { TProductCreate, TProductFilter, TProductUpdate } from './product.type';
import createError from 'http-errors';
import { handlePaginationParams } from '../../utils/typeorm.utils';
import { TPagination } from '../../utils/common.type';

@singleton()
export class ProductService {
  private readonly productRepository = container.resolve(ProductRepository);

  async getAll(): Promise<Product[]> {
    return await this.productRepository.getAll();
  }
  async getPagination(input: TProductFilter): Promise<TPagination<Product[]>> {
    const { name, size, page } = input;
    const { skip, take } = handlePaginationParams(page, size);
    const data = await this.productRepository.getPagination(input);
    return { data, page: page ?? 1, size: size ?? 10 };
  }
  async getById(id: string): Promise<Product> {
    const product = await this.productRepository.getById(id);
    if (!product) throw createError(404, 'Product not found');
    return product;
  }

  async create(input: TProductCreate): Promise<Product> {
    return await this.productRepository.create(input);
  }

  async update(input: TProductUpdate): Promise<Product> {
    await this.getById(input.id);
    return await this.productRepository.update(input);
  }

  async delete(id: string): Promise<void> {
    await this.getById(id);
    await this.productRepository.delete(id);
  }
}
