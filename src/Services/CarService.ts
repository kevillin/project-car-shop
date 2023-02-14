import Car from '../Domains/Car';
// import KeyFactory from '../Domain/Key/KeyFactory';
import ICar from '../Interfaces/ICar';
import Cars from '../Models/Cars';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async register(car: ICar): Promise<Car | null> {
    const carODM = new Cars();
    const typedKey = await carODM.create(car);

    return this.createCarDomain(typedKey);
  }

  public async findAll() {
    const carODM = new Cars();
    const typedKey = await carODM.findAll();
    const result = typedKey.map((car) => this.createCarDomain(car));

    return result;
  }

  public async findById(id: string): Promise<Car | null> {
    const carODM = new Cars();
    const typedKey = await carODM.findById(id);

    return this.createCarDomain(typedKey as ICar);
  }
  public async updateById(id: string, obj: ICar): Promise<Car | null> {
    const carODM = new Cars();
    const typedKey = await carODM.updateById(id, obj);

    return this.createCarDomain(typedKey as ICar);
  }
}

export default CarService;