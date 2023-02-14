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
}

export default CarService;