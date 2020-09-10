import { InjectionToken } from '@angular/core';

export interface AppConfig {
  url: string;
  key: string;
}

export const API_CONFIG = new InjectionToken<AppConfig>('app.config');
