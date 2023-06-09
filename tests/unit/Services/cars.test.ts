import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

// const RESULT_ERROR = 'Invalid Key';

describe('Deveria validar os carros', function () {
  it('Criando um carro com SUCESSO', async function () {
    // Arrange
    const carInput: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const carOut = {
      id: '63ebf23b03dc4ebe3041b388',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };

    const carOutput: Car = new Car(carOut);

    sinon.stub(Model, 'create').resolves(carOutput);
    // Act
    const service = new CarService();
    const result = await service.register(carInput);
    // Assert
    expect(result).to.be.deep.equal(carOutput);
    sinon.restore();
  });
  it('Listando todos os carros com sucesso', async function () {
    // Arrange

    const carOut = [
      {
        id: '63ebf67d632a665acc66501d',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '63ebf67d632a665acc66501d',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      },
    ];

    const carOutput: Car[] = carOut.map((car) => new Car(car));
    sinon.stub(Model, 'find').resolves(carOutput);
    // Act
    const service = new CarService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal(carOutput);
    sinon.restore();
  });
});