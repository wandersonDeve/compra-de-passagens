import { Test, TestingModule } from '@nestjs/testing';
import { AssentoController } from './assento.controller';
import { AssentoService } from './assento.service';

describe('AssentoController', () => {
  let controller: AssentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssentoController],
      providers: [AssentoService],
    }).compile();

    controller = module.get<AssentoController>(AssentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
