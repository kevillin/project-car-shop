import { Router } from 'express';
import MotoController from '../Controllers/MotoController';

const MotoRoutes = Router();

MotoRoutes.post(
  '/',
  (req, res, next) => new MotoController(req, res, next).create(),
);
MotoRoutes.get(
  '/',
  (req, res, next) => new MotoController(req, res, next).findAll(),
);
MotoRoutes.get(
  '/:id',
  (req, res, next) => new MotoController(req, res, next).findById(),
);

export default MotoRoutes;