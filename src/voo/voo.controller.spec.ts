import { Test, TestingModule } from '@nestjs/testing';
import { VooController } from './voo.controller';
import { VooService } from './voo.service';

describe('VooController', () => {
  let controller: VooController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VooController],
      providers: [VooService],
    }).compile();

    controller = module.get<VooController>(VooController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
