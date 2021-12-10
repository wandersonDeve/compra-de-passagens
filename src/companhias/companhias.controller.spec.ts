import { Test, TestingModule } from '@nestjs/testing';
import { CompanhiasController } from './companhias.controller';
import { CompanhiasService } from './companhias.service';

describe('CompanhiasController', () => {
  let controller: CompanhiasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanhiasController],
      providers: [CompanhiasService],
    }).compile();

    controller = module.get<CompanhiasController>(CompanhiasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
