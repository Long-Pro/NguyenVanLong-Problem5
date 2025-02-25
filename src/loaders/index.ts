import { container } from 'tsyringe';
import loadExpress from './express';
import loadTypeorm from './typeorm';
import { ProductService } from '../modules/product/product.service';

const loader = async () => {
  await loadTypeorm();
  await loadExpress();
};
export default loader;
