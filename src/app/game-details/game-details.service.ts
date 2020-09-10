import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';
import { API_CONFIG, AppConfig } from '../app.config';

@Injectable()
export class GameDetailsService {
  constructor(
    private readonly httpClient: HttpClient,
    @Inject(API_CONFIG) private readonly API_CONFIG: AppConfig
  ) {}

  public getGame() {
    return this.httpClient.post(
      this.API_CONFIG.url + 'games',
      'fields *; where id = 1942;'
    );
  }
}
