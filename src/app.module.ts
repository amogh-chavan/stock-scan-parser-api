import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScansModule } from './scans/scans.module';

@Module({
  imports: [ScansModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
