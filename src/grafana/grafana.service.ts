import {Injectable} from '@nestjs/common';
import {HttpService} from '@nestjs/axios';
import { map } from 'rxjs/operators'

@Injectable()
export class GrafanaService {
    token = 'eyJrIjoiV0dQMnpRazdnVFVSYkpkbXc1VjJLQTByaFg3emFubEoiLCJuIjoibWlrZS10ZXN0IiwiaWQiOjN9';

    headersRequest = {
        'Authorization': `Bearer ${this.token}`,
    };

    constructor(private httpService: HttpService) {
    }

    getGrafanaHome() {
        return this.httpService.get('https://spitzer.dev.cnp.ikeadt.com/api/dashboards/home', {headers: this.headersRequest})
            .pipe(
                map(response => response.data)
            );
    }

    getGrafanaApiServerDashboard(){
        return this.httpService.get('https://spitzer.dev.cnp.ikeadt.com/api/dashboards/uid/76tdyM87z', {headers: this.headersRequest})
            .pipe(
                map(response => response.data)
            );
    }

    getGrafanaAlertRulesTest(){
        return this.httpService.get('https://spitzer.dev.cnp.ikeadt.com/api/prometheus/grafana/api/v1/alerts', {headers: this.headersRequest})
            .pipe(
                map(response => response.data)
            );
    }

}
