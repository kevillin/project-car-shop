// import Category from '../utils/CategoryMoto';
import IVehice from './IVehicle';

export default interface IMotorcycle extends IVehice {
  category: string;
  engineCapacity: number;
}