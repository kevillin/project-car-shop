import Motocycle from '../Domains/Motorcycle';
import IMotorcycles from '../Interfaces/IMotorcycle';
import Motorcycle from '../Models/Motorcycles';

class CarService {
  private createMotoDomain(moto: IMotorcycles | null): Motocycle | null {
    if (moto) {
      return new Motocycle(moto);
    }
    return null;
  }

  public async register(moto: IMotorcycles): Promise<Motocycle | null> {
    const motoODM = new Motorcycle();
    const typedKey = await motoODM.create(moto);

    return this.createMotoDomain(typedKey);
  }

  public async findAll() {
    const motoODM = new Motorcycle();
    const typedKey = await motoODM.findAll();
    const result = typedKey.map((moto) => this.createMotoDomain(moto));

    return result;
  }

  public async findById(id: string): Promise<Motocycle | null> {
    const motoODM = new Motorcycle();
    const typedKey = await motoODM.findById(id);

    return this.createMotoDomain(typedKey as IMotorcycles);
  }
}

export default CarService;