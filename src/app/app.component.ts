import { Component, OnInit } from '@angular/core';
import { AppSettings } from './shared/models/app-settings.model';
import { AppConfigurationsService } from './shared/services/app-configurations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  appSettings: AppSettings | undefined;
  title: string | undefined;

  constructor(private appConfigurationsService: AppConfigurationsService) {}

  ngOnInit() {
    this.getAppVersion();
  }

  getAppVersion() {
    this.appSettings = this.appConfigurationsService.getAppConfigurations();

    this.title = this.appSettings?.appVersion;
  }
}
