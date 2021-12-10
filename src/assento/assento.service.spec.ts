import { Test, TestingModule } from '@nestjs/testing';
import { AssentoService } from './assento.service';

describe('AssentoService', () => {
  let service: AssentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssentoService],
    }).compile();

    service = module.get<AssentoService>(AssentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
