import { Module } from '@nestjs/common';
import { PrometheusService } from './prometheus.service';
import { PrometheusController } from './prometheus.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [PrometheusController],
  providers: [PrometheusService],
  exports: [PrometheusService],
})
export class PrometheusModule {}
