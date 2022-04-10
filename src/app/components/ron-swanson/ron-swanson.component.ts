import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ron-swanson',
  templateUrl: './ron-swanson.component.html',
  styleUrls: ['./ron-swanson.component.scss']
})
export class RonSwansonComponent implements OnInit {
  public currentQuote!: Observable<string>;
  public isLoading = false

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getQuote()
  }

  getQuote() {
    this.currentQuote = this.api.getRonSwansonQoute()
  }

}
