import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = this.req.body;

    try {
      const newCar = await this.service.register(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    const result = await this.service.findAll();
    return this.res.status(200).json(result);
  }

  public async findById() {
    const { id } = this.req.params;

    try {
      const result = await this.service.findById(id);

      if (!result) {
        return this.res.status(404).json({ message: 'Car not found' });
      }
      if (!isValidObjectId(id)) {
        return this.res.status(422).json({ message: 'Invalid mongo id' });
      }
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;