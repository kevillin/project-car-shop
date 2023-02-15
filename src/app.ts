import express from 'express';
import CarRoutes from './Routes/CarRoutes';
import MotoRoutes from './Routes/MotoRoutes';

const app = express();
app.use(express.json());
app.use('/cars', CarRoutes);
app.use('/motorcycles', MotoRoutes);

export default app;
