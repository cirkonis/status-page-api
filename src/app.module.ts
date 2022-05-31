import { Module} from '@nestjs/common';
import {GrafanaModule} from "./grafana/grafana.module";

@Module({
  imports: [GrafanaModule],
})
export class AppModule {}
