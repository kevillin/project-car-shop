import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotoService from '../../../src/Services/MotoService';

const modelMoto = 'Honda Cb 600f Hornet';

const motoInput: IMotorcycle = {
  model: modelMoto,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

// const RESULT_ERROR = 'Invalid Key';

describe('Deveria validar as motos', function () {
  it('Criando uma moto com SUCESSO', async function () {
    // Arrange

    const carOut = {
      id: '63ebf23b03dc4ebe3041b388',
      model: modelMoto,
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const carOutput: Motorcycle = new Motorcycle(carOut);

    sinon.stub(Model, 'create').resolves(carOutput);
    // Act
    const service = new MotoService();
    const result = await service.register(motoInput);
    // Assert
    expect(result).to.be.deep.equal(carOutput);
  });
  it('Listando todas as motos com sucesso', async function () {
    // Arrange

    const carOut1 = {
      id: '63ebf23b03dc4ebe3041b388',
      model: 'Honda Cb 600f Horne',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const carOutput: Motorcycle = new Motorcycle(carOut1);

    const carOut = [
      {
        id: '63ebf67d632a665acc66501d',
        model: 'Honda Cb 600f Hornet',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      },
    ];

    sinon.stub(Model, 'find').resolves(carOut);
    // Act
    const service = new MotoService();
    const result = await service.register(motoInput);

    expect(result).to.be.deep.equal(carOutput);
  });
});