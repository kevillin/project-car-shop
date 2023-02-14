import ICar from '../Interfaces/ICar';

class Car {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    this.id = car.id || undefined;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = car.status || false;
    this.buyValue = car.buyValue;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
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

  public setDoorsQty(doors: number) {
    this.doorsQty = doors;
  }

  public getDoorsQty() {
    return this.doorsQty;
  }

  public setSeatsQty(seats: number) {
    this.seatsQty = seats;
  }

  public getSeatsQty() {
    return this.seatsQty;
  }
}

export default Car;