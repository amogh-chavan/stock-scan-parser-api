import { Injectable } from '@nestjs/common';
import { data } from 'src/database/data';

@Injectable()
export class ScansService {
  constructor() {}

  async getStockScans() {
    return data;
  }
}
