import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { AppConstants } from '../commons/app-constants';
import { AppSettings } from '../models/app-settings.model';

@Injectable({
  providedIn: 'root',
})
export class AppConfigurationsService {
  private appConfigurations: AppSettings | undefined;

  constructor(private http: HttpClient) {}

  loadAppSettings() {
    return this.http
      .get<AppSettings>(AppConstants.DEFAULT_ASSETS_CONFIGURATIONS_FILE)
      .toPromise()
      .then((data) => {
        this.appConfigurations = data;
      });
  }

  getAppConfigurations() {
    return this.appConfigurations;
  }
}
