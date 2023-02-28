import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotoService from '../../../src/Services/MotoService';

describe('Deveria validar as motos', function () {
  it('Criando uma moto com SUCESSO', async function () {
    // Arrange
    const carInput: IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30,
      category: 'Street',
      engineCapacity: 600,
    };

    const carOut = {
      id: '63fa1dc2b5f9ebffd56a1b1b',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30,
      category: 'Street',
      engineCapacity: 600,
    };

    const carOutput: Motorcycle = new Motorcycle(carOut);

    sinon.stub(Model, 'create').resolves(carOutput);
    // Act
    const service = new MotoService();
    const result = await service.register(carInput);
    // Assert
    expect(result).to.be.deep.equal(carOutput);

    sinon.restore();
  });
  it('Listando todas as motos com sucesso', async function () {
    // Arrange
    // const carInput: IMotorcycle = {
    //   model: 'Marea',
    //   year: 2002,
    //   color: 'Black',
    //   status: true,
    //   buyValue: 15.99,
    //   category: 'Street',
    //   engineCapacity: 5,
    // };

    // const carOut1 = {
    //   id: '63ebf67d632a665acc66501d',
    //   model: 'Marea',
    //   year: 2002,
    //   color: 'Black',
    //   status: true,
    //   buyValue: 15.99,
    //   category: 'Street',
    //   engineCapacity: 5,
    // };

    // const carOutput: Motorcycle = new Motorcycle(carOut1);

    const carOut = [
      {
        id: '63ebf67d632a665acc66501d',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        category: 'Street',
        engineCapacity: 5,
      },
      {
        id: '63ebf67d632a665acc66501d',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        category: 'Street',
        engineCapacity: 5,
      },
    ];
    const motoOutput = carOut.map((moto) => new Motorcycle(moto));
    sinon.stub(Model, 'find').resolves(motoOutput);
    // Act
    const service = new MotoService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal(motoOutput);

    sinon.restore();
  });
});
