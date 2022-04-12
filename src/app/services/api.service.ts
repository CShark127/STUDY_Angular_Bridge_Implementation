import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_URLS } from './api-urls';
import { Observable } from 'rxjs';

import { IFriendsQuote } from '../models/friends-quote';
import { IDogResponse } from '../models/dog-api-response';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private urls = API_URLS;

  constructor(private http: HttpClient) {}

  getRonSwansonQoute(): Observable<string> {
    return this.http.get<string>(this.urls.RON_SWANSON);
  }

  getFriendsQuote(): Observable<IFriendsQuote> {
    return this.http.get<IFriendsQuote>(this.urls.FRIENDS);
  }

  getRandomDog(breed: string): Observable<IDogResponse> {
    return this.http.get<IDogResponse>(
      this.urls.RANDOM_DOG.replace('{breed}', breed)
    );
  }
}
