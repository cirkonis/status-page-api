import { Module } from '@nestjs/common';
import { GrafanaModule } from './grafana/grafana.module';
import { PrometheusModule } from './prometheus/prometheus.module';

@Module({
  imports: [GrafanaModule, PrometheusModule],
  providers: [],
})
export class AppModule {}
