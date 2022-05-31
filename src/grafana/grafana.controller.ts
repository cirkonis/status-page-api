import {Controller, Get} from '@nestjs/common';
import {GrafanaService} from "./grafana.service";

@Controller('grafana')
export class GrafanaController {

    constructor(private readonly grafanaService: GrafanaService) {
    }

    @Get('home')
    getHomeInfo() {
        return this.grafanaService.getGrafanaHome();
    }

    @Get('api-server')
    getApiServerInfo() {
        return this.grafanaService.getGrafanaApiServerDashboard();
    }

    @Get('alert-rules')
    getAlertRulesTest(){
        return this.grafanaService.getGrafanaAlertRulesTest();
    }

}
