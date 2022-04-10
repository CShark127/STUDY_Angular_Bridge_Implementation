import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from 'src/app/services/api.service';

import { IFriendsQuote } from 'src/app/models/friends-quote';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  public currentQuote!: Observable<IFriendsQuote>;
  public isLoading = false

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getQuote()
  }

  getQuote() {
    this.currentQuote = this.api.getFriendsQuote()
  }
}
