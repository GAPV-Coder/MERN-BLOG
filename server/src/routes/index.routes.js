import { Router } from 'express';
import authRoutes from './auth.routes.js';

const routerApi = Router();

routerApi.use('/auth', authRoutes);

export default routerApi;