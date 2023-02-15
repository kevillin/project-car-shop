import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;

  constructor(vehicle: IVehicle) {
    this.id = vehicle.id || undefined;
    this.model = vehicle.model;
    this.year = vehicle.year;
    this.color = vehicle.color;
    this.status = vehicle.status || false;
    this.buyValue = vehicle.buyValue;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public setModel(mod: string) {
    this.model = mod;
  }

  public getModel() {
    return this.model;
  }

  public setYear(years: number) {
    this.year = years;
  }

  public getYear() {
    return this.year;
  }

  public setColor(col: string) {
    this.color = col;
  }

  public getColor() {
    return this.color;
  }

  public setBuyValue(value: number) {
    this.buyValue = value;
  }

  public getBuyValue() {
    return this.buyValue;
  }
}

export default Vehicle;