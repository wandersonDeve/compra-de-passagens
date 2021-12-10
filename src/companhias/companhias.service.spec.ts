import { Test, TestingModule } from '@nestjs/testing';
import { CompanhiasService } from './companhias.service';

describe('CompanhiasService', () => {
  let service: CompanhiasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanhiasService],
    }).compile();

    service = module.get<CompanhiasService>(CompanhiasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
