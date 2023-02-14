import {
  Model,
  Schema,
  model,
  models,
  UpdateQuery,
} from 'mongoose';
import ICar from '../Interfaces/ICar';

export default class Cars {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.cars || model('cars', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async findAll() {
    return this.model.find();
  }

  public async findById(id: string) {
    return this.model.findById(id);
  }

  public async updateById(id: string, obj: Partial<ICar>) {
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...obj } as UpdateQuery<ICar>,
      { new: true },
    );
  }
}