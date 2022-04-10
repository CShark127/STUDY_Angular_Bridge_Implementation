import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_URLS } from './api-urls';
import { Observable } from 'rxjs';

import { IFriendsQuote } from '../models/friends-quote';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urls = API_URLS;

  constructor(private http: HttpClient) { }

  getRonSwansonQoute(): Observable<string> {
    return this.http.get<string>(this.urls.RON_SWANSON);
  }

  getFriendsQuote() : Observable<IFriendsQuote> {
    return this.http.get<IFriendsQuote>(this.urls.FRIENDS)
  }
}
