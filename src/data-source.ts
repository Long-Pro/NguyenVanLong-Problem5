import { DataSource } from 'typeorm';
import env from './configs/env.config';
import { Product } from './modules/product/entities/product.entity';

export const appDataSource = new DataSource({
  type: 'mysql',
  host: env.db.host,
  port: env.db.port,
  username: env.db.user,
  password: env.db.password,
  database: env.db.name,
  synchronize: true,
  logging: false,
  entities: [Product],
  subscribers: [],
  migrations: [],
});
