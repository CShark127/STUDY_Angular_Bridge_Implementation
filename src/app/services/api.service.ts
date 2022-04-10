import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_URLS } from './api-urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urls = API_URLS;

  constructor(private http: HttpClient) { }

  getRonSwansonQoute(): Observable<string> {
    return this.http.get<string>(this.urls.RON_SWANSON);
  }
}
