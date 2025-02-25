import { singleton } from 'tsyringe';
import { appDataSource } from '../../data-source';
import { Product } from './entities/product.entity';
import {
  TProductCount,
  TProductCreate,
  TProductFilter,
  TProductUpdate,
} from './product.type';
import { handlePaginationParams } from '../../utils/typeorm.utils';
import { Like } from 'typeorm';

@singleton()
export class ProductRepository {
  private readonly productRepository;
  constructor() {
    this.productRepository = appDataSource.getRepository(Product);
  }
  async getAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }
  async getById(id: string): Promise<Product | null> {
    return await this.productRepository.findOneBy({ id });
  }
  async getPagination(input: TProductFilter): Promise<Product[]> {
    const { name, page, size } = input;
    const { take, skip } = handlePaginationParams(page, size);
    return await this.productRepository.find({
      where: { ...(name ? { name: Like(`%${name}%`) } : {}) },
      take,
      skip,
    });
  }
  async count(input: TProductCount): Promise<number> {
    const { name } = input;
    return await this.productRepository.count({
      where: { ...(name ? { name: Like(`%${name}%`) } : {}) },
    });
  }

  async create(input: TProductCreate): Promise<Product> {
    return await this.productRepository.save(input);
  }
  async update(input: TProductUpdate): Promise<Product> {
    return await this.productRepository.save(input);
  }
  async delete(id: string): Promise<void> {
    await this.productRepository.delete({ id });
  }
}
