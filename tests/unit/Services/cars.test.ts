import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';

// const RESULT_ERROR = 'Invalid Key';

describe('Deveria validar os carros', function () {
  it('Criando um carro com SUCESSO', async function () {
    // Arrange
    const carInput: ICar = {
      model: 'Sonata',
      year: 2022,
      color: 'Blue',
      buyValue: 1000,
      doorsQty: 4,
      seatsQty: 5,
    };

    const carOutput: Car = new Car();

    sinon.stub(Model, 'create').resolves(carOutput);
    // Act
    const service = new CarService();
    const result = await service.register(carInput);
    // Assert
    expect(result).to.be.deep.equal(carOutput);
  });
});