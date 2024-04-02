import { Controller, Get } from '@nestjs/common';
import { ScansService } from './scans.service';
import { ApiOperation } from '@nestjs/swagger';
import ApiResponse from 'src/shared/dto/api-response.dto';

@Controller('scans')
export class ScansController {
  constructor(private readonly scansService: ScansService) {}

  @Get()
  @ApiOperation({ summary: 'Gets stock market scans' })
  async readVendorRestaurant() {
    const data = await this.scansService.getStockScans();
    return new ApiResponse(true, data, 'Stock Market Scans Fetched');
  }
}
