import { Router } from 'express';
import CarController from '../Controllers/CarController';

const CarRoutes = Router();

CarRoutes.post(
  '/',
  (req, res, next) => new CarController(req, res, next).create(),
);

export default CarRoutes;