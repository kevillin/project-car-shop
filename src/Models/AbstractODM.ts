import {
  Model,
  Schema,
  model,
  models,
  UpdateQuery,
} from 'mongoose';

export default class AbstractODM <T> {
  protected schema: Schema;
  protected model: Model<T>;
  protected name: string;

  constructor(schema: Schema, name: string) {
    this.schema = schema;
    this.name = name;
    this.model = models[name] || model(name, this.schema);
  }

  public async create(vehicle: T): Promise<T> {
    return this.model.create({ ...vehicle });
  }

  public async findAll() {
    return this.model.find();
  }

  public async findById(id: string) {
    return this.model.findById(id);
  }

  public async updateById(id: string, obj: Partial<T>) {
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }
}