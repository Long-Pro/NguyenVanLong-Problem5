import { Router } from 'express';
import productRouter from '../modules/product/product.route';

const router = Router();
const aptPrefix = '/api';
router.use(aptPrefix, productRouter);

export default router;
