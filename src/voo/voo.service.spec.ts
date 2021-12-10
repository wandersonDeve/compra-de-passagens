import { Test, TestingModule } from '@nestjs/testing';
import { VooService } from './voo.service';

describe('VooService', () => {
  let service: VooService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VooService],
    }).compile();

    service = module.get<VooService>(VooService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
