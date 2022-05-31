import {GrafanaService} from "./grafana.service";
import { Module } from "@nestjs/common";
import {GrafanaController} from "./grafana.controller";
import {HttpModule} from "@nestjs/axios";

@Module({
    imports: [HttpModule],
    controllers: [GrafanaController],
    providers: [GrafanaService],
    exports: [GrafanaService],
})
export class GrafanaModule {}
