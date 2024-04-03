import { Test, TestingModule } from '@nestjs/testing';
import { ScansService } from './scans.service';
import { data } from '../database/data';

describe('ScansService', () => {
  let service: ScansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScansService],
    }).compile();

    service = module.get<ScansService>(ScansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Get Stock Scans should return valid data', async () => {
    const result = await service.getStockScans();

    expect(result).toStrictEqual(data);
  });
});
